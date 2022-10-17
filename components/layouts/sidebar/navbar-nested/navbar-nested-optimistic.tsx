import { Anchor, Box, Button, createStyles, Group, MediaQuery, Navbar } from '@mantine/core';
import Image from 'next/future/image';

import { IconChevronLeft, IconSearch } from '@tabler/icons';
import { useContext } from 'contexts/context';
import Link from 'next/link';
import logo from '../../../../public/genallergyfree-upscaled.svg';
import UserButton from '../../../buttons/user/user-button';

const useStyles = createStyles((theme) => ({
  navbarClosed: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: '0 !important',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  navbarOpened: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: '0 !important',
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavbarNestedOptimistic() {
  const { state } = useContext();
  const { classes } = useStyles();

  return (
    <Navbar
      height="auto"
      width={{ sm: 300 }}
      p="md"
      className={state.opened ? classes.navbarOpened : classes.navbarClosed}
    >
      <Navbar.Section className={classes.header}>
        <>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Group position="apart">
              <Link href="/" passHref>
                <Button
                  component="a"
                  variant="light"
                  color="pink"
                  size="xs"
                  radius="xl"
                  sx={{ paddingLeft: 12, paddingRight: 12 }}
                >
                  <IconChevronLeft />
                </Button>
              </Link>
              <Link href="/" passHref>
                <Anchor>
                  <Image src={logo} alt="Logo" width={160} height={21} priority />
                </Anchor>
              </Link>
              <IconSearch />
            </Group>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Box>
              <Link href="/" passHref>
                <Anchor>
                  <Image src={logo} alt="Logo" width={250} height={21} priority />
                </Anchor>
              </Link>
            </Box>
          </MediaQuery>
        </>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links}>
        <div className={classes.linksInner} />
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Jane Doe"
          email="janedoe@gmail.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
