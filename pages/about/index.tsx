import { Box, Container, createStyles, Stack, Text, Title } from '@mantine/core';
import { FeaturedAbout } from 'components/landing/featured-about';
import { FeaturedTwins } from 'components/landing/featured-twins';
import { Quotes } from 'components/landing/quotes';
import Head from 'next/head';
import type { ReactElement } from 'react';

import Layout from '../../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../../lib/constants';
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
    marginBottom: 0,
    lineHeight: 1,

    [theme.fn.largerThan('sm')]: {
      fontSize: '6rem',
    },
  },
  fight: {
    textTransform: 'uppercase',
    color: '#FF65BE',
  },

  featuredSection: {
    paddingBottom: 80,

    [theme.fn.smallerThan('lg')]: {
      paddingBottom: 0,
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
  separatorPink: {
    width: 0,
    height: 0,
    maxWidth: '100%',
    borderRight: '100vw solid transparent',
    borderBottom: '5vw solid #FF65BE',
    marginTop: '-5vw',
  },
}));

const About: NextPageWithLayout = () => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>{`About Us | ${WEBSITE_NAME}`}</title>
      </Head>
      <Box component="section" className={classes.titleSection}>
        <Container size="lg" pt={80} pb={80}>
          <Stack>
            <Title order={1} className={classes.title}>
              We&apos;re glad you&apos;re here
            </Title>
            <Text component="h4" weight={400} my={0}>
              Knowing us on a deeper level will help you understand our passion to help people and
              curb this allergy epidemic.
            </Text>
            <Title order={3} className={classes.fight}>
              We can fight this together!
            </Title>
          </Stack>
        </Container>
      </Box>
      <div className={classes.separator} />
      <Box
        component="section"
        className={classes.featuredSection}
        sx={{ backgroundColor: 'black' }}
      >
        <Container size="md" pb={80} pt={80}>
          <FeaturedTwins />
        </Container>
      </Box>
      <div className={classes.separatorWhite} />
      <Box
        component="section"
        className={classes.featuredSection}
        sx={{ backgroundColor: 'white' }}
      >
        <Container size="md" pb={80} pt={80}>
          <FeaturedAbout />
        </Container>
      </Box>
      <div className={classes.separatorPink} />
      <Box component="section" sx={{ backgroundColor: '#FF65BE' }}>
        <Container size="md" pb={80} pt={80}>
          <Quotes color="#FEED00" />
        </Container>
      </Box>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement, pageProps) {
  return (
    <Layout preview={pageProps.preview} headerColor="#FEED00" footerColor="black">
      {page}
    </Layout>
  );
};

export default About;
