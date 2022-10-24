import { Badge, Box, Button, Card, createStyles, Stack, Title } from '@mantine/core';
import { CourseSanity } from 'additional';
import Link from 'next/link';
import FillImage from '../content/fill-image';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    width: 300,
    backgroundColor: 'white',
    border: '8px solid #FF65BE',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontSize: theme.fontSizes.xl,
    overflowWrap: 'break-word',
    wordWrap: 'break-word',

    [theme.fn.smallerThan('lg')]: {
      fontSize: theme.fontSizes.xs,
    },
  },
  description: {
    fontSize: theme.fontSizes.sm,
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    height: 87,

    [theme.fn.smallerThan('lg')]: {
      fontSize: theme.fontSizes.xs,
    },
  },

  image: {
    width: '100%',
    position: 'relative',
    maxWidth: 300,
    height: 169,

    [theme.fn.smallerThan('lg')]: {
      width: '100%',
    },
  },
}));

export function CourseCard({ course }: { course: CourseSanity }) {
  const { classes } = useStyles();

  return (
    <Link href={`/learn/${course.slug}`} style={{ textDecoration: 'none' }}>
      <Card shadow="sm" p={0} className={classes.card}>
        <Box className={classes.image}>
          <FillImage image={course.thumbnail} priority width={300} height={169} />
        </Box>

        <Box sx={{ padding: 16 }}>
          <Stack mt="md" mb="xs" spacing="xs">
            <Title order={4} weight={500} className={classes.title}>
              {course.title}
            </Title>
            <Badge color="pink" variant="light">
              For: {course.targetAudience}
            </Badge>
          </Stack>

          <Title
            order={5}
            weight={400}
            size="sm"
            color="dimmed"
            mt="md"
            mb="xs"
            className={classes.description}
          >
            {course.heroDescription}
          </Title>

          <Button variant="light" color="grape" fullWidth mt="md" radius="md">
            Get Started
          </Button>
        </Box>
      </Card>
    </Link>
  );
}
