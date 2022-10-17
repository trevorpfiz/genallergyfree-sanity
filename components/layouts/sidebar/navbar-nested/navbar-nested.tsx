import {
  Anchor,
  Box,
  Button,
  createStyles,
  Group,
  MediaQuery,
  Navbar,
  ScrollArea,
} from '@mantine/core';
import {
  IconBlockquote,
  IconChecklist,
  IconChevronLeft,
  IconNotes,
  IconNumber0,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
  IconNumber7,
  IconNumber8,
  IconNumber9,
  IconSearch,
} from '@tabler/icons';
import Image from 'next/future/image';
import { useEffect, useRef } from 'react';

import { useContext } from 'contexts/context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../../../public/genallergyfree-upscaled.svg';
import UserButton from '../../../buttons/user/user-button';
import { LinksGroup, LinksGroupProps } from '../navbar-links-group/navbar-links-group';

const useStyles = createStyles((theme) => ({
  navbarClosed: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: '0 !important',
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  navbarOpened: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: '0 !important',
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      touchAction: 'none',
    },
  },
  bodyOpened: {
    [theme.fn.smallerThan('sm')]: {
      overflow: 'hidden',
      height: '100%',
    },
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
    paddingTop: theme.spacing.md,
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

const chapterToIcon = {
  disclaimer: IconNotes,
  0: IconNumber0,
  1: IconNumber1,
  2: IconNumber2,
  3: IconNumber3,
  4: IconNumber4,
  5: IconNumber5,
  6: IconNumber6,
  7: IconNumber7,
  8: IconNumber8,
  9: IconNumber9,
  checklist: IconChecklist,
  citations: IconBlockquote,
};

function addIcon(links: LinksGroupProps[]) {
  return links.map((section) => {
    const key = section.chapter as keyof typeof chapterToIcon;
    if (key in chapterToIcon) {
      return { ...section, icon: chapterToIcon[key] };
    }
    return { ...section, icon: IconNotes };
  });
}

function smartBack(router: any) {
  const { course, section, slug } = router.query;

  if (slug) return `/learn/${course}/${section}`;
  if (section) return `/learn/${course}`;

  return '/';
}

export interface NavbarNestedProps {
  linksData: LinksGroupProps[];
}

export default function NavbarNested({ linksData }: NavbarNestedProps) {
  const { state } = useContext();
  const { classes } = useStyles();
  const router = useRouter();

  const firstUpdate = useRef(true);
  const scrollRef = useRef<HTMLAnchorElement>(null);

  const links = addIcon(linksData).map((section) => (
    <LinksGroup {...section} ref={scrollRef} key={section.title} />
  ));

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    scrollRef.current?.scrollIntoView();

    const body = document.getElementById('body');
    body?.classList.toggle(classes.bodyOpened);
  }, [state.opened, classes.bodyOpened]);

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
              <Link href={smartBack(router)} passHref>
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

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
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
