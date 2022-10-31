import { Box, Button, createStyles, Group, Stack, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CourseSanity } from 'additional';
import Link from 'next/link';
import FillImage from '../content/fill-image';

interface CourseProps {
  course: CourseSanity;
  index: number;
  color: string;
}

const useStyles = createStyles((theme, { color }: CourseProps) => ({
  stack: {
    [theme.fn.largerThan('sm')]: {
      maxWidth: 400,
    },
  },

  featured: {
    fontSize: '14px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '2.5rem',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    textTransform: 'uppercase',
    color: theme.colors[color][6],
    lineHeight: 1,

    [theme.fn.largerThan('sm')]: {
      fontSize: '3rem',
    },
  },
  target: {
    fontSize: '18px',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '18px',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',

    [theme.fn.largerThan('sm')]: {
      fontSize: '18px',
    },
  },
  getStarted: {
    textTransform: 'uppercase',
    backgroundColor: theme.colors[color][6],
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 8,

    '&:hover': {
      backgroundColor: theme.colors[color][9],
    },
  },

  image: {
    width: '100%',
    height: 200,
    position: 'relative',
    border: '8px solid black',

    [theme.fn.largerThan('sm')]: {
      width: 300,
      height: 420,
    },
    [theme.fn.largerThan('md')]: {
      width: 400,
      height: 540,
    },
  },
}));

export function FeaturedCourse({ course, index, color }: CourseProps) {
  const { classes } = useStyles({ course, index, color });
  const matches = useMediaQuery('(min-width: 768px)', true, { getInitialValueInEffect: false });

  return (
    <Group position="apart" mt={40} mb={40}>
      {index % 2 && matches ? (
        <>
          <Box className={classes.image}>
            <FillImage image={course.thumbnail} priority width={400} height={540} />
          </Box>
          <Stack align="flex-start" spacing="xs" className={classes.stack}>
            <Title order={5} className={classes.featured}>
              Featured Course
            </Title>
            <Title order={2} className={classes.title}>
              {course.title}
            </Title>
            <Title order={3} className={classes.target}>
              {`Perfect For ${course.targetAudience}`}
            </Title>
            <Title order={4} weight={400} className={classes.description}>
              {course.heroDescription}
            </Title>
            <Link href={`/learn/${course.slug}`}>
              <Button color="pink" radius="xl" size="lg" className={classes.getStarted}>
                Get Started
              </Button>
            </Link>
          </Stack>
        </>
      ) : (
        <>
          <Stack align="flex-start" spacing="xs" className={classes.stack}>
            <Title order={5} className={classes.featured}>
              Featured Course
            </Title>
            <Title order={2} className={classes.title}>
              {course.title}
            </Title>
            <Title order={3} className={classes.target}>
              {`Perfect For ${course.targetAudience}`}
            </Title>
            <Title order={4} weight={400} className={classes.description}>
              {course.heroDescription}
            </Title>
            <Link href={`/learn/${course.slug}`}>
              <Button radius="xl" size="lg" className={classes.getStarted}>
                Get Started
              </Button>
            </Link>
          </Stack>
          <Box className={classes.image}>
            <FillImage image={course.thumbnail} priority width={400} height={540} />
          </Box>
        </>
      )}
    </Group>
  );
}
