import { Box, Collapse, createStyles, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconNotes } from '@tabler/icons';
import { useState } from 'react';

import ActiveLink from 'components/utils/active-link';
import { useContext } from 'contexts/context';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  slug: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      cursor: 'pointer',
    },
  },

  activeSlug: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.blue[7],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.blue[0],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.blue[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      cursor: 'pointer',
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

export interface LinksGroupProps {
  title: string;
  initiallyOpened?: boolean;
  posts?: { title: string; slug: string }[];
}

export function LinksGroup({ title, initiallyOpened = true, posts }: LinksGroupProps) {
  const { dispatch } = useContext();
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(initiallyOpened || false);

  const hasPosts = Array.isArray(posts);
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const items = (hasPosts ? posts : []).map((post) => (
    <ActiveLink
      href={`/posts/${post.slug}`}
      passHref
      key={post.title}
      activeClassName={classes.activeSlug}
    >
      <Text<'a'>
        component="a"
        className={classes.slug}
        onClick={() => dispatch({ type: 'toggle' })}
      >
        {post.title}
      </Text>
    </ActiveLink>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <IconNotes size={18} />
            </ThemeIcon>
            <Box ml="md">{title}</Box>
          </Box>
          {hasPosts && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasPosts ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
