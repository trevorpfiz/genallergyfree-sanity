import { Box, Paper, Text, Title } from '@mantine/core';
import { CourseSanity } from 'additional';
import Link from 'next/link';

import CardImage, { useStyles } from '../content/card-image';

export default function CoursePreview({
  course: { title, thumbnail, description, slug },
}: {
  course: CourseSanity;
}) {
  const { classes } = useStyles();

  return (
    <Box>
      <Paper
        shadow="sm"
        mb="lg"
        className={classes.negMarginImage}
        sx={(theme) => ({
          '&:hover': {
            boxShadow: theme.shadows.lg,
          },
          transition: 'box-shadow 200ms',
        })}
      >
        <CardImage
          slug={slug}
          title={title}
          image={thumbnail}
          priority
          width={2000}
          height={1000}
        />
      </Paper>
      <Title order={3} size="h1" weight="normal" mb="sm" sx={{ lineHeight: '1.375' }}>
        <Link href={`/learn/${slug}`} style={{ textDecoration: 'none' }}>
          <Text
            color="dark.9"
            sx={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {title}
          </Text>
        </Link>
      </Title>
      <Text mb="lg" size={18} sx={{ lineHeight: '1.625' }}>
        {description}
      </Text>
    </Box>
  );
}