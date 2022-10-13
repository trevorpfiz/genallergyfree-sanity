import { Container } from '@mantine/core';
import { CourseSanity } from 'additional';
import Head from 'next/head';
import type { ReactElement } from 'react';

import HeroCourse from '../components/content/hero-course';
import MoreCourses from '../components/content/more-courses';
import Intro from '../components/intro';
import Layout from '../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../lib/constants';
import { indexQuery } from '../lib/queries';
import { usePreviewSubscription } from '../lib/sanity';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import type { NextPageWithLayout } from './_app';

interface IndexProps {
  allCourses: CourseSanity[];
  preview: boolean;
}

const Index: NextPageWithLayout<IndexProps> = ({ allCourses: initialAllCourses, preview }) => {
  const { data: allCourses } = usePreviewSubscription(indexQuery, {
    initialData: initialAllCourses,
    enabled: preview,
  });
  const [heroCourse, ...moreCourses] = allCourses || [];

  return (
    <>
      <Head>
        <title>{WEBSITE_NAME}</title>
      </Head>
      <Container fluid px="0">
        <Intro />
        {heroCourse && <HeroCourse course={heroCourse} />}
        {moreCourses.length > 0 && <MoreCourses courses={moreCourses} />}
      </Container>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allCourses = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allCourses, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

Index.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <Layout preview={pageProps.preview}>{page}</Layout>;
};

export default Index;
