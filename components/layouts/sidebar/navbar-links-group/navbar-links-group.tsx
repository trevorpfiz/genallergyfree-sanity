import { Box, Collapse, createStyles, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, TablerIcon } from '@tabler/icons';
import { useRouter } from 'next/router';
import { forwardRef, useState } from 'react';

import { useMediaQuery } from '@mantine/hooks';
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
    fontSize: theme.fontSizes.xs + 1,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    scrollMarginTop: 300,

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
    fontSize: theme.fontSizes.xs + 1,
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
  slug: string;
  // eslint-disable-next-line react/no-unused-prop-types
  chapter: string;
  posts?: { title: string; slug: string }[];
  icon: TablerIcon;
}

export const LinksGroup = forwardRef<HTMLDivElement, LinksGroupProps>((props, ref) => {
  const { title, slug: sectionSlug, posts, icon: Icon }: LinksGroupProps = props;

  const router = useRouter();
  const { course, section, slug } = router.query;

  const { dispatch } = useContext();
  const { classes, theme } = useStyles();
  const [opened, setOpened] = useState(section === sectionSlug || false);

  const matches = useMediaQuery('(max-width: 767px)');
  const hasPosts = Array.isArray(posts);
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const items = (hasPosts ? posts : []).map((post) => (
    <ActiveLink
      href={`/learn/${course}/${sectionSlug}/${post.slug}`}
      key={post.title}
      activeClassName={classes.activeSlug}
    >
      <Text
        size={13}
        className={classes.slug}
        ref={slug === post.slug ? ref : null}
        onClick={matches ? () => dispatch({ type: 'toggle' }) : undefined}
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
              <Icon size={18} />
            </ThemeIcon>
            <Text size={13} ml="md">
              {title}
            </Text>
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
});
