import { Box, Container, createStyles, Stack, Text, Title } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import type { ReactElement } from 'react';

import { CourseSanity } from 'additional';
import { CourseUpdates } from 'components/landing/course-updates';
import { FeaturedCourse } from 'components/landing/featured-course';
import { Quotes } from 'components/landing/quotes';
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
  separatorWhite: {
    width: 0,
    height: 0,
    maxWidth: '100%',
    borderLeft: '100vw solid transparent',
    borderBottom: '5vw solid white',
    marginTop: '-5vw',
  },
  separatorYellow: {
    width: 0,
    height: 0,
    maxWidth: '100%',
    borderLeft: '100vw solid transparent',
    borderBottom: '5vw solid #FEED00',
    marginTop: '-5vw',
  },

  triStack: {
    paddingTop: 80,
    paddingBottom: 40,

    [theme.fn.largerThan('sm')]: {
      paddingTop: 160,
      paddingBottom: 160,
    },
  },
  triTitle: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    color: 'white',

    [theme.fn.largerThan('sm')]: {
      fontSize: '1.5rem',
    },
  },
  triText: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    lineHeight: 1,

    [theme.fn.largerThan('sm')]: {
      fontSize: '4rem',
    },
  },
  triOne: {
    color: '#FEED00',
  },
  triTwo: {
    color: 'white',
  },
  triThree: {
    color: '#FF65BE',
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

  const courseColors = ['pink', 'blue', 'green'];
  // const courseColors = ['#FF65BE', '#00E2FF', '#00F5B4'];

  return (
    <>
      <Head>
        <title>{WEBSITE_NAME}</title>
      </Head>
      <Box component="section" sx={{ backgroundColor: '#FEED00' }}>
        <Container size="lg" pb={80}>
          <Stack align="center" pt={80} pb={80}>
            <Title order={1} className={classes.heroText}>
              Let&apos;s stop <span className={classes.allergy}>allergy</span>!
            </Title>
            <Text component="h2" className={classes.heroDescription}>
              We believe that everyone should be allergy free. Our free research-focused courses
              make this a reality for the generations to come.
            </Text>
            <Image
              src={heroImage}
              alt="Young boy reaching for strawberry on countertop."
              sizes="100vw"
              placeholder="blur"
              priority
              style={{ width: '100%', height: 'auto', border: '8px solid black' }}
            />
          </Stack>
        </Container>
      </Box>
      <div className={classes.separator} />
      <Box component="section" sx={{ backgroundColor: '#000' }}>
        <Container size="lg" pb={80}>
          <Stack className={classes.triStack}>
            <Title order={3} className={classes.triTitle}>
              Pave the way for the next generation
            </Title>
            <Title order={2} className={classes.triText}>
              <span className={classes.triOne}>Know the struggles of allergies?</span>{' '}
              <span className={classes.triTwo}>Looking to avoid them with your child?</span>{' '}
              <span className={classes.triThree}>We&apos;ve got the courses for you.</span>
            </Title>
          </Stack>
        </Container>
      </Box>
      <div className={classes.separatorWhite} />
      <Box component="section" sx={{ backgroundColor: '#fff' }}>
        <Container size="lg" pb={80}>
          <Stack>
            {allCourses.map((course, index) => (
              <FeaturedCourse
                course={course}
                index={index}
                color={courseColors[index]}
                key={course._id}
              />
            ))}
          </Stack>
        </Container>
      </Box>
      <div className={classes.separator} />
      <Box component="section" sx={{ backgroundColor: '#000' }}>
        <Container size="sm" pb={80}>
          <CourseUpdates />
        </Container>
      </Box>
      <div className={classes.separatorYellow} />
      <Box component="section" sx={{ backgroundColor: '#FEED00' }}>
        <Container size="md" pb={80} pt={80}>
          <Quotes color="#FF65BE" />
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
    <Layout preview={pageProps.preview} headerColor="#FEED00" footerColor="black">
      {page}
    </Layout>
  );
};

export default Index;
