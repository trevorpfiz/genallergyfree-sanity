import { AspectRatio, Card, createStyles, Group, Stack, Title } from '@mantine/core';
import { CourseSanity } from 'additional';
import Link from 'next/link';

import FillImage from './fill-image';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

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

  image: {
    width: 300,

    [theme.fn.smallerThan('lg')]: {
      width: 150,
    },
  },
}));

export default function CourseDashboard({ courseData }: { courseData: CourseSanity }) {
  const { classes } = useStyles();

  return (
    <Stack>
      {courseData?.sections.map((section) => (
        <Link
          href={`/learn/${courseData.slug}/${section.slug}`}
          key={section._id}
          style={{ textDecoration: 'none' }}
        >
          <Card shadow="sm" p={0} pr="lg" radius="md" withBorder className={classes.card}>
            <Group position="left" spacing="xl" noWrap>
              <Card.Section>
                <AspectRatio ratio={16 / 9} className={classes.image} sx={{ width: 300 }}>
                  <FillImage image={section.thumbnail} priority width={640} height={360} />
                </AspectRatio>
              </Card.Section>
              <Title order={3} weight={600} className={classes.title}>
                {section.title}
              </Title>
            </Group>
          </Card>
        </Link>
      ))}
    </Stack>
  );
}
