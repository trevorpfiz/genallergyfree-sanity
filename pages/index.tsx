import { Container } from '@mantine/core';
import Head from 'next/head';
import { s } from 'sanity-typed-schema-builder';
import post from 'studio/schemas/postTyped';

import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import { WEBSITE_NAME } from '../lib/constants';
import { indexQuery } from '../lib/queries';
import { usePreviewSubscription } from '../lib/sanity';
import { getClient, overlayDrafts } from '../lib/sanity.server';

export default function Index({
  allPosts: initialAllPosts,
  preview,
}: {
  allPosts: s.resolved<typeof post>[];
  preview: any;
}) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  });
  const [heroPost, ...morePosts] = allPosts || [];

  return (
    <Layout preview={preview}>
      <Head>
        <title>{WEBSITE_NAME}</title>
      </Head>
      <Container fluid px="0">
        <Intro />
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
