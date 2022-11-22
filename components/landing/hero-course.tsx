import { Box, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import { CourseSanity } from 'additional';
import Link from 'next/link';

import CardImage, { useStyles } from '../content/card-image';

export default function HeroCourse({
  course: { title, thumbnail, description, slug },
}: {
  course: CourseSanity;
}) {
  const { classes } = useStyles();

  return (
    <Box component="section">
      <Paper
        shadow="sm"
        mb={64}
        className={classes.negMarginImage}
        sx={(theme) => ({
          '&:hover': {
            boxShadow: theme.shadows.lg,
          },
          transition: 'box-shadow 200ms',

          [theme.fn.smallerThan('sm')]: {
            marginBottom: theme.spacing.xl,
          },
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
      <SimpleGrid mb={112} breakpoints={[{ minWidth: 'sm', cols: 2, spacing: 128 }]}>
        <Box>
          <Title order={3} size="2.75rem" weight="normal" mb="md" sx={{ lineHeight: '1.25' }}>
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
        </Box>
        <Box>
          <Text mb="md" size={18} sx={{ lineHeight: '1.625' }}>
            {description}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}