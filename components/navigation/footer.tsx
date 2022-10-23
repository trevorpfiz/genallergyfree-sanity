import { ActionIcon, Container, createStyles, Group, Text } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/genallergyfree-upscaled.svg';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 0,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logo}>
          <Image src={logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
        </div>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <Container size="lg" className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 TwinZ LLC - All Rights Reserved
        </Text>

        <Group spacing="md" position="right" noWrap>
          <Link href="/legal/privacy-policy" style={{ textDecoration: 'none' }}>
            <Text component="p" size="xs" color="dimmed">
              Privacy Policy
            </Text>
          </Link>
          <Link href="/legal/terms-of-service" style={{ textDecoration: 'none' }}>
            <Text component="p" size="xs" color="dimmed">
              Terms of Service
            </Text>
          </Link>
        </Group>
      </Container>
    </footer>
  );
}
