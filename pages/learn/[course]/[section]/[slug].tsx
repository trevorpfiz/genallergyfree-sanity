import { Container } from '@mantine/core';
import { PostSanity } from 'additional';
import { PrevNext } from 'components/content/prev-next';
import SidebarLayout from 'components/layouts/sidebar/sidebar-layout';
import { GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import PostBody from '../../../../components/content/post-body';
import PostHeader from '../../../../components/content/post-header';
import PostTitle from '../../../../components/content/post-title';
import SectionSeparator from '../../../../components/utils/section-separator';
import { WEBSITE_NAME } from '../../../../lib/constants';
import { postQuery, postSlugsQuery, prevNextPostQuery } from '../../../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../../../lib/sanity';
import { getClient, sanityClient } from '../../../../lib/sanity.server';
import type { NextPageWithLayout } from '../../../_app';

interface PostProps {
  data: DataProps;
  preview: boolean;
}

interface DataProps {
  post?: PostSanity;
  prev?: PostSanity;
  next?: PostSanity;
}

const Post: NextPageWithLayout<PostProps> = ({ data = {}, preview }) => {
  const router = useRouter();

  const prev = data?.prev;
  const next = data?.next;

  const slug = data?.post?.slug;
  const {
    data: { post },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container fluid px="0">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${post?.title} | ${WEBSITE_NAME}`}</title>
              {post?.heroImage?.asset?._ref && (
                <meta
                  key="ogImage"
                  property="og:image"
                  // eslint-disable-next-line newline-per-chained-call
                  content={urlForImage(post.heroImage).width(1200).height(627).fit('crop').url()}
                />
              )}
            </Head>
            {post && <PostHeader post={post || null} />}
            {post && <PostBody post={post || null} />}
          </article>
          <SectionSeparator />
          <PrevNext prev={prev} next={next} />
        </>
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params?.slug,
  });
  const { prev, next } = await getClient(preview).fetch(prevNextPostQuery, {
    order: post?.order,
  });

  return {
    props: {
      preview,
      data: {
        post,
        next,
        prev,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
};

export async function getStaticPaths() {
  const paths: PostSanity[] = await sanityClient.fetch(postSlugsQuery);

  function loopParams(posts: PostSanity[]) {
    return posts.flatMap((post) =>
      post.sections.flatMap((section) =>
        section.courses.flatMap((course) => ({
          params: { course: course.slug, section: section.slug, slug: post.slug },
        }))
      )
    );
  }

  return {
    paths: loopParams(paths),
    fallback: true,
  };
}

Post.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <SidebarLayout preview={pageProps.preview}>{page}</SidebarLayout>;
};

export default Post;
