import { Group, Title, createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  myResponsiveTitle: {
    fontSize: '6rem',

    [theme.fn.smallerThan('smD')]: {
      fontSize: '2.75rem',
      textAlign: 'center',
    },
  },
}));

export default function Intro() {
  const { classes } = useStyles();

  return (
    <Group
      component='section'
      position='apart'
      my={'3rem'}
      sx={(theme) => ({
        [theme.fn.smallerThan('smD')]: { justifyContent: 'center' },
      })}
    >
      <Title
        order={1}
        size='6rem'
        weight='bold'
        className={classes.myResponsiveTitle}
        sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
      >
        Blog.
      </Title>
      <Title
        order={4}
        weight='normal'
        sx={(theme) => ({
          [theme.fn.smallerThan('smD')]: { textAlign: 'center' },
        })}
      >
        A statically generated blog example using Next.js and Sanity.
      </Title>
    </Group>
  );
}
