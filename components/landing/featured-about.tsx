import { Box, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

import couchImage from '../../public/couch.jpg';
import danceImage from '../../public/dance.jpg';
import glassesImage from '../../public/glasses.jpg';

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
    color: 'black',
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

    [theme.fn.largerThan('sm')]: {
      fontSize: '18px',
    },
  },

  image: {
    width: '100%',
    height: 200,
    position: 'relative',
    border: '8px solid black',

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

export function FeaturedAbout() {
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 768px)', true, { getInitialValueInEffect: false });

  return (
    <>
      {matches ? (
        <>
          <Group position="apart" mt={40} mb={40}>
            <Stack align="flex-start" spacing="lg" className={classes.stack}>
              <Title order={2} className={classes.title} sx={{ color: '#FF65BE' }}>
                Our Story
              </Title>
              <Text component="p" m={0} className={classes.description}>
                It started similar between us; swollen itchy throats and stomach pain after eating
                certain foods.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                As time went on, however, differences became more apparent. While we both had
                seasonal allergies and Oral Allergy Syndrome, only one of us was developing
                anaphylactic food allergies.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                Hmm, interesting. Identical twins with near-identical DNA have profound differences
                in their allergies. This prompted us to dive into the details, and Generation
                Allergy Free was born.
              </Text>
            </Stack>
            <Box className={classes.image}>
              <Image
                fill
                src={glassesImage}
                alt="One short and one tall glass."
                sizes="100vw"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Group>
          <Group position="apart" mt={40} mb={40}>
            <Box className={classes.image}>
              <Image
                fill
                src={couchImage}
                alt="Man and woman sitting on couch holding a laptop."
                sizes="100vw"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Stack align="flex-start" spacing="lg" className={classes.stack}>
              <Title order={2} className={classes.title} sx={{ color: '#00E2FF' }}>
                Why do we teach?
              </Title>
              <Text component="p" m={0} className={classes.description}>
                Amid our research, we realized that we had acquired knowledge that had our parents
                known 20 years ago, we wouldn&apos;t have the same allergy struggles today.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                We decided that teaching others through Generation Allergy Free was a great way to
                touch many more lives than just our eventual children.
              </Text>
            </Stack>
          </Group>
          <Group position="apart" mt={40} mb={40}>
            <Stack align="flex-start" spacing="lg" className={classes.stack}>
              <Title order={2} className={classes.title} sx={{ color: '#FEED00' }}>
                Our values
              </Title>
              <Text component="p" m={0} className={classes.description}>
                To help people live healthy, happy, and pain-free lives.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                This is only the start of our journey. Expanding on the knowledge in these courses
                can help many other diseases; people in pain and suffering today an be joyous
                tomorrow.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                We believe we can make the world a better place, and this business is symbolic of us
                putting our beliefs into action.
              </Text>
            </Stack>
            <Box className={classes.image}>
              <Image
                fill
                src={danceImage}
                alt="Mother teaching daughter how to dance."
                sizes="100vw"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Group>
        </>
      ) : (
        <>
          <Group position="apart" mt={40} mb={40}>
            <Stack align="flex-start" spacing="xs" className={classes.stack}>
              <Title order={2} className={classes.title} sx={{ color: '#FF65BE' }}>
                Our Story
              </Title>
              <Text component="p" m={0} className={classes.description}>
                It started similar between us; swollen itchy throats and stomach pain after eating
                certain foods.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                As time went on, however, differences became more apparent. While we both had
                seasonal allergies and Oral Allergy Syndrome, only one of us was developing
                anaphylactic food allergies.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                Hmm, interesting. Identical twins with near-identical DNA have profound differences
                in their allergies. This prompted us to dive into the details, and Generation
                Allergy Free was born.
              </Text>
            </Stack>
            <Box className={classes.image}>
              <Image
                fill
                src={glassesImage}
                alt="One short and one tall glass."
                sizes="100vw"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Group>
          <Group position="apart" mt={40} mb={40}>
            <Stack align="flex-start" spacing="lg" className={classes.stack}>
              <Title order={2} className={classes.title} sx={{ color: '#00E2FF' }}>
                Why do we teach?
              </Title>
              <Text component="p" m={0} className={classes.description}>
                Amid our research, we realized that we had acquired knowledge that had our parents
                known 20 years ago, we wouldn&apos;t have the same allergy struggles today.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                We decided that teaching others through Generation Allergy Free was a great way to
                touch many more lives than just our eventual children.
              </Text>
            </Stack>
            <Box className={classes.image}>
              <Image
                fill
                src={couchImage}
                alt="Man and woman sitting on couch holding a laptop."
                sizes="100vw"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Group>
          <Group position="apart" mt={40} mb={40}>
            <Stack align="flex-start" spacing="lg" className={classes.stack}>
              <Title order={2} className={classes.title} sx={{ color: '#FEED00' }}>
                Our values
              </Title>
              <Text component="p" m={0} className={classes.description}>
                To help people live healthy, happy, and pain-free lives.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                This is only the start of our journey. Expanding on the knowledge in these courses
                can help many other diseases; people in pain and suffering today an be joyous
                tomorrow.
              </Text>
              <Text component="p" m={0} className={classes.description}>
                We believe we can make the world a better place, and this business is symbolic of us
                putting our beliefs into action.
              </Text>
            </Stack>
            <Box className={classes.image}>
              <Image
                fill
                src={danceImage}
                alt="Mother teaching daughter how to dance."
                sizes="100vw"
                placeholder="blur"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Group>
        </>
      )}
    </>
  );
}
