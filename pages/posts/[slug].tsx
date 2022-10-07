import { Container } from '@mantine/core';
import SidebarLayout from 'components/layouts/sidebar/sidebar-layout';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { s } from 'sanity-typed-schema-builder';
import postTyped from 'studio/schemas/postTyped';

import MoreStories from '../../components/content/more-stories';
import PostBody from '../../components/content/post-body';
import PostHeader from '../../components/content/post-header';
import PostTitle from '../../components/content/post-title';
import Header from '../../components/navigation/header';
import SectionSeparator from '../../components/utils/section-separator';
import { WEBSITE_NAME } from '../../lib/constants';
import { postQuery, postSlugsQuery } from '../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../lib/sanity';
import { getClient, overlayDrafts, sanityClient } from '../../lib/sanity.server';
import type { NextPageWithLayout } from '../_app';

interface PostProps {
  data: DataProps;
  preview: boolean;
}

interface DataProps {
  post?: s.resolved<typeof postTyped>;
  morePosts?: s.resolved<typeof postTyped>[];
}

const Post: NextPageWithLayout<PostProps> = ({ data = {}, preview }) => {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, morePosts },
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
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${post?.title} | ${WEBSITE_NAME}`}</title>
              {post?.coverImage?.asset?._ref && (
                <meta
                  key="ogImage"
                  property="og:image"
                  // eslint-disable-next-line newline-per-chained-call
                  content={urlForImage(post.coverImage).width(1200).height(627).fit('crop').url()}
                />
              )}
            </Head>
            {post && <PostHeader post={post || null} />}
            {post && <PostBody post={post || null} />}
          </article>
          <SectionSeparator />
          {morePosts && <MoreStories posts={morePosts} />}
        </>
      )}
    </Container>
  );
};

export async function getStaticProps({ params, preview = false }: any) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

Post.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <SidebarLayout preview={pageProps.preview}>{page}</SidebarLayout>;
};

export default Post;
