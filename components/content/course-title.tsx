import { createStyles, Group, Title } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  myResponsiveTitle: {
    fontSize: '4rem',

    [theme.fn.smallerThan('sm')]: {
      fontSize: '2.75rem',
      textAlign: 'center',
    },
  },
}));

export default function Intro() {
  const { classes } = useStyles();

  return (
    <section>
      <Group
        position="apart"
        my="3rem"
        sx={(theme) => ({
          [theme.fn.smallerThan('sm')]: { justifyContent: 'center' },
        })}
      >
        <Title
          order={1}
          size="6rem"
          weight="bold"
          className={classes.myResponsiveTitle}
          sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
        >
          Blog.
        </Title>
        <Title
          order={4}
          weight="normal"
          sx={(theme) => ({
            [theme.fn.smallerThan('sm')]: { textAlign: 'center' },
          })}
        >
          A statically generated blog example using Next.js and Sanity.
        </Title>
      </Group>
    </section>
  );
}
