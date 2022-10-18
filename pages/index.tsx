import { Box, Container, createStyles, Group, Stack, Text } from '@mantine/core';
import Image from 'next/future/image';
import Head from 'next/head';
import type { ReactElement } from 'react';

import { CourseSanity } from 'additional';
import { CourseCard } from 'components/content/course-card';
import Layout from '../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../lib/constants';
import { indexQuery } from '../lib/queries';
import { usePreviewSubscription } from '../lib/sanity';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import heroImage from '../public/strawberry-kid.jpg';
import type { NextPageWithLayout } from './_app';

const useStyles = createStyles((theme) => ({
  heroText: {
    fontSize: '3rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    lineHeight: 1,

    [theme.fn.largerThan('sm')]: {
      fontSize: '6rem',
    },
  },
  allergy: {
    color: '#FF65BE',
    textDecoration: 'underline',
    textDecorationColor: 'black',
    textTransform: 'uppercase',
  },
  heroDescription: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',

    [theme.fn.largerThan('sm')]: {
      fontSize: 24,
      width: '66%',
    },
  },

  separator: {
    width: 0,
    height: 0,
    maxWidth: '100%',
    borderRight: '100vw solid transparent',
    borderBottom: '5vw solid black',
    marginTop: '-5vw',
  },
}));

interface IndexProps {
  allCourses: CourseSanity[];
  preview: boolean;
}

const Index: NextPageWithLayout<IndexProps> = ({ allCourses: initialAllCourses, preview }) => {
  const { data: allCourses } = usePreviewSubscription(indexQuery, {
    initialData: initialAllCourses,
    enabled: preview,
  });

  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>{WEBSITE_NAME}</title>
      </Head>
      <Box component="section" sx={{ backgroundColor: '#FEED00' }}>
        <Container size="lg" pb={80}>
          <Stack align="center" pt={80} pb={80}>
            <Text component="h1" className={classes.heroText}>
              Let&apos;s stop <span className={classes.allergy}>allergy</span>!
            </Text>
            <Text component="h2" className={classes.heroDescription}>
              We believe that everyone should be allergy free. Our free research-focused courses
              make this a reality for the generations to come.
            </Text>
            <Image
              src={heroImage}
              alt="Young boy reaching for strawberry on countertop."
              sizes="100vw"
              placeholder="blur"
              style={{ width: '100%', height: 'auto', border: '8px solid black' }}
            />
          </Stack>
        </Container>
      </Box>
      <div className={classes.separator} />
      <Box component="section" sx={{ backgroundColor: '#000' }}>
        <Container size="lg" pb={80}>
          <Group position="center" spacing="xl">
            {allCourses.map((course) => (
              <CourseCard course={course} key={course._id} />
            ))}
          </Group>
        </Container>
      </Box>
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
  return (
    <Layout preview={pageProps.preview} color="#FEED00">
      {page}
    </Layout>
  );
};

export default Index;
