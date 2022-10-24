import { Box, Container, createStyles, Group, Stack, Title } from '@mantine/core';
import { CourseSanity } from 'additional';
import Head from 'next/head';
import type { ReactElement } from 'react';

import { CourseCard } from '../../components/landing/course-card';
import Layout from '../../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../../lib/constants';
import { indexQuery } from '../../lib/queries';
import { usePreviewSubscription } from '../../lib/sanity';
import { getClient, overlayDrafts } from '../../lib/sanity.server';
import type { NextPageWithLayout } from '../_app';

const useStyles = createStyles((theme) => ({
  titleSection: {
    backgroundColor: '#FEED00',
    paddingBottom: 100,

    [theme.fn.smallerThan('lg')]: {
      paddingBottom: 0,
    },
  },
  title: {
    fontSize: '3rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 0,
    lineHeight: 1,

    [theme.fn.largerThan('sm')]: {
      fontSize: '6rem',
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

  courses: {
    backgroundColor: '#000',
  },
}));

interface CoursesProps {
  allCourses: CourseSanity[];
  preview: boolean;
}

const Courses: NextPageWithLayout<CoursesProps> = ({ allCourses: initialAllCourses, preview }) => {
  const { data: allCourses } = usePreviewSubscription(indexQuery, {
    initialData: initialAllCourses,
    enabled: preview,
  });

  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>{`Courses | ${WEBSITE_NAME}`}</title>
      </Head>
      <Box component="section" className={classes.titleSection}>
        <Container size="lg" pt={80} pb={80}>
          <Stack align="center">
            <Title order={1} className={classes.title}>
              Our Courses
            </Title>
          </Stack>
        </Container>
      </Box>
      <div className={classes.separator} />
      <Box component="section" py={100} className={classes.courses}>
        <Container size="lg">
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

Courses.getLayout = function getLayout(page: ReactElement, pageProps) {
  return (
    <Layout preview={pageProps.preview} headerColor="#FEED00" footerColor="black">
      {page}
    </Layout>
  );
};

export default Courses;
