import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from '@mantine/core';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('smD')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('smD')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('smD')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('smD')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
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

    [theme.fn.smallerThan('smD')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('smD')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export default function FooterLinks() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container size={'lg'} className={classes.inner}>
        <div className={classes.logo}>
          <img
            src='/genallergyfree-upscaled.svg'
            alt='Logo'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <Group spacing={0} className={classes.social} position='right' noWrap>
          <ActionIcon size='lg'>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <Container size={'lg'} className={classes.afterFooter}>
        <Text color='dimmed' size='sm'>
          © 2022 TwinZ LLC - All Rights Reserved
        </Text>

        <Group spacing={'md'} position='right' noWrap>
          <Text size='xs' color='dimmed'>
            Privacy Policy
          </Text>
          <Text size='xs' color='dimmed'>
            Terms of Service
          </Text>
        </Group>
      </Container>
    </footer>
  );
}
