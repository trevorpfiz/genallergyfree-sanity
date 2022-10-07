import { Container } from '@mantine/core';
import Head from 'next/head';
import type { ReactElement } from 'react';
import { s } from 'sanity-typed-schema-builder';
import post from 'studio/schemas/postTyped';

import HeroPost from '../components/content/hero-post';
import MoreStories from '../components/content/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../lib/constants';
import { indexQuery } from '../lib/queries';
import { usePreviewSubscription } from '../lib/sanity';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import type { NextPageWithLayout } from './_app';

interface IndexProps {
  allPosts: s.resolved<typeof post>[];
  preview: boolean;
}

const Index: NextPageWithLayout<IndexProps> = ({ allPosts: initialAllPosts, preview }) => {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  });
  const [heroPost, ...morePosts] = allPosts || [];

  return (
    <>
      <Head>
        <title>{WEBSITE_NAME}</title>
      </Head>
      <Container fluid px="0">
        <Intro />
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

Index.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <Layout preview={pageProps.preview}>{page}</Layout>;
};

export default Index;
