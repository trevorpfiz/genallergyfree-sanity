import { Box, Burger, Button, createStyles, Group, Header, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/genallergyfree-upscaled.svg';

const HEADER_HEIGHT = 86;

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    // ...theme.fn.hover({
    //   backgroundColor: '#FF65BE',
    // }),
  },
  linkDropdown: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    textDecoration: 'none',
    color: 'black',
    backgroundColor: '#FF65BE',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: '#ff53b6',
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  dropdown: {
    position: 'absolute',
    top: 64,
    left: 0,
    right: 0,
    zIndex: 0,
    border: 'none',
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

interface HeaderProps {
  color?: string;
}

export function HeaderNav({ color = 'white' }: HeaderProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Box sx={{ backgroundColor: color }}>
      <Header
        height={HEADER_HEIGHT}
        px="md"
        py="xl"
        mx="auto"
        sx={{ maxWidth: 1288, border: 'none', backgroundColor: color }}
      >
        <Group position="apart" sx={{ height: '100%' }}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={230} height={21} priority />
          </Link>

          <Group sx={{ height: '100%' }} spacing="sm" className={classes.hiddenMobile}>
            <Link href="/about" className={classes.link}>
              About Us
            </Link>
            <Link href="/courses">
              <Button radius="xl" color="pink">
                Courses
              </Button>
            </Link>
          </Group>

          <Burger opened={opened} onClick={toggle} className={classes.hiddenDesktop} />
        </Group>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <Link
                href="/about"
                className={classes.linkDropdown}
                onClick={() => {
                  close();
                }}
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className={classes.linkDropdown}
                onClick={() => {
                  close();
                }}
              >
                Courses
              </Link>
            </Paper>
          )}
        </Transition>
      </Header>
    </Box>
  );
}
