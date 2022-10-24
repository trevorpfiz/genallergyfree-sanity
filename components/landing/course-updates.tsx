import { Button, createStyles, Stack, Title } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  stack: {
    paddingTop: 80,
    paddingBottom: 40,

    [theme.fn.largerThan('sm')]: {
      paddingTop: 80,
      paddingBottom: 80,
    },
  },

  title: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    color: '#FEED00',

    [theme.fn.largerThan('sm')]: {
      fontSize: '3rem',
    },
  },
  highlight: {
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
    fontWeight: 400,
    textAlign: 'center',

    [theme.fn.largerThan('sm')]: {
      fontSize: 18,
    },
  },

  button: {
    textTransform: 'uppercase',
    color: 'black',
    backgroundColor: '#feed00',
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 32,

    '&:hover': {
      backgroundColor: '#f1e100',
    },
  },
}));

export function CourseUpdates() {
  const { classes } = useStyles();

  return (
    <Stack align="center" className={classes.stack}>
      <Title order={3} className={classes.title}>
        Course updates <span className={classes.highlight}>included</span>!
      </Title>
      <Title order={4} className={classes.description}>
        Continue to protect your child knowing you are getting access to the best cutting edge
        research with new course updates over time.
      </Title>
      <Link href="/courses">
        <Button radius="xl" size="lg" className={classes.button}>
          Go to courses
        </Button>
      </Link>
    </Stack>
  );
}
