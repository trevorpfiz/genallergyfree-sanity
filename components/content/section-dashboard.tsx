import { AspectRatio, Card, createStyles, Group, Stack, Text } from '@mantine/core';
import { SectionSanity } from 'additional';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

export default function SectionDashboard({ sectionData }: { sectionData: SectionSanity }) {
  const { classes } = useStyles();

  const router = useRouter();
  const { course } = router.query;

  return (
    <Stack>
      {sectionData?.posts.map((post) => (
        <Link href={`/learn/${course}/${sectionData.slug}/${post.slug}`} passHref key={post._id}>
          <Card
            component="a"
            shadow="sm"
            p={0}
            pr="lg"
            radius="md"
            withBorder
            className={classes.card}
          >
            <Group position="left" spacing="xl" noWrap>
              <Card.Section>
                <AspectRatio ratio={16 / 9} className={classes.image} sx={{ width: 300 }}>
                  <FillImage image={post.heroImage} priority width={640} height={360} />
                </AspectRatio>
              </Card.Section>
              <Text component="h3" weight={600} className={classes.title}>
                {post.title}
              </Text>
            </Group>
          </Card>
        </Link>
      ))}
    </Stack>
  );
}
