import { Container } from '@mantine/core';
import { CourseSanity } from 'additional';
import SidebarLayout from 'components/layouts/sidebar/sidebar-layout';
import { GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import PostTitle from '../../../components/content/post-title';
import Header from '../../../components/navigation/header';
import SectionSeparator from '../../../components/utils/section-separator';
import { WEBSITE_NAME } from '../../../lib/constants';
import { courseQuery, courseSlugsQuery } from '../../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../../lib/sanity';
import { getClient, sanityClient } from '../../../lib/sanity.server';
import type { NextPageWithLayout } from '../../_app';

interface CourseProps {
  data: DataProps;
  preview: boolean;
}

interface DataProps {
  course?: CourseSanity;
}

const Course: NextPageWithLayout<CourseProps> = ({ data = {}, preview }) => {
  const router = useRouter();

  const slug = data?.course?.slug;
  const {
    data: { course },
  } = usePreviewSubscription(courseQuery, {
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
              <title>{`${course?.title} | ${WEBSITE_NAME}`}</title>
              {course?.thumbnail?.asset?._ref && (
                <meta
                  key="ogImage"
                  property="og:image"
                  // eslint-disable-next-line newline-per-chained-call
                  content={urlForImage(course.thumbnail).width(1200).height(627).fit('crop').url()}
                />
              )}
            </Head>
          </article>
          <SectionSeparator />
        </>
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const course = await getClient(preview).fetch(courseQuery, {
    slug: params?.course,
  });

  return {
    props: {
      preview,
      data: {
        course,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(courseSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { course: slug } })),
    fallback: true,
  };
}

Course.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <SidebarLayout preview={pageProps.preview}>{page}</SidebarLayout>;
};

export default Course;
