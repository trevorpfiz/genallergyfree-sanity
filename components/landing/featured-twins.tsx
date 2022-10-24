import { Box, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

import heroImage from '../../public/strawberry-kid.jpg';

const useStyles = createStyles((theme) => ({
  stack: {
    [theme.fn.largerThan('sm')]: {
      maxWidth: 400,
    },
  },

  featured: {
    fontSize: '14px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2.5rem',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    textTransform: 'uppercase',
    color: 'white',
    lineHeight: 1,

    [theme.fn.largerThan('sm')]: {
      fontSize: '3rem',
    },
  },
  target: {
    fontSize: '18px',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '18px',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    color: 'white',

    [theme.fn.largerThan('sm')]: {
      fontSize: '18px',
    },
  },

  image: {
    width: '100%',
    height: 200,
    position: 'relative',
    border: '8px solid #FEED00',

    [theme.fn.largerThan('sm')]: {
      width: 300,
      height: 420,
    },
    [theme.fn.largerThan('md')]: {
      width: 400,
      height: 540,
    },
  },
}));

export function FeaturedTwins() {
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 768px)', true, { getInitialValueInEffect: false });

  return (
    <>
      {matches ? (
        <Group position="apart" mt={40} mb={40}>
          <Box className={classes.image}>
            <Image
              fill
              src={heroImage}
              alt="Young boy reaching for strawberry on countertop."
              sizes="100vw"
              placeholder="blur"
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Stack align="flex-start" spacing="lg" className={classes.stack}>
            <Title order={2} className={classes.title}>
              Hi, we&apos;re Zachary and Trevor
            </Title>
            <Text component="p" m={0} className={classes.description}>
              We are identical twins who have been struggling with allergies from a young age.
            </Text>
            <Text component="p" m={0} className={classes.description}>
              Starting at the age of 3 and into our early 20s, there have been many hurdles that
              we&apos;ve had to jump.
            </Text>
          </Stack>
        </Group>
      ) : (
        <Group position="apart" mt={40} mb={40}>
          <Stack align="flex-start" spacing="lg" className={classes.stack}>
            <Title order={2} className={classes.title}>
              Hi, we&apos;re Zachary and Trevor
            </Title>
            <Text component="p" m={0} className={classes.description}>
              We are identical twins who have been struggling with allergies from a young age.
            </Text>
            <Text component="p" m={0} className={classes.description}>
              Starting at the age of 3 and into our early 20s, there have been many hurdles that
              we&apos;ve had to jump.
            </Text>
          </Stack>
          <Box className={classes.image}>
            <Image
              fill
              src={heroImage}
              alt="Young boy reaching for strawberry on countertop."
              sizes="100vw"
              placeholder="blur"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Group>
      )}
    </>
  );
}
