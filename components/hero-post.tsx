import { Anchor, Box, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { s } from 'sanity-typed-schema-builder';
import post from 'studio/schemas/postTyped';

import Avatar from './avatar';
import CoverImage, { useStyles } from './cover-image';
import Date from './date';

export default function HeroPost({
  post: { title, coverImage, date, excerpt, author, slug },
}: {
  post: s.resolved<typeof post>;
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
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </Paper>
      <SimpleGrid mb={112} breakpoints={[{ minWidth: 'sm', cols: 2, spacing: 128 }]}>
        <Box>
          <Title order={3} size="2.75rem" weight="normal" mb="md" sx={{ lineHeight: '1.25' }}>
            <Link href={`/posts/${slug}`}>
              <Anchor
                color="dark.9"
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {title}
              </Anchor>
            </Link>
          </Title>
          <Box sx={{ fontSize: 18 }}>
            <Date dateString={date} />
          </Box>
        </Box>
        <Box>
          <Text mb="md" size={18} sx={{ lineHeight: '1.625' }}>
            {excerpt}
          </Text>
          {author && <Avatar author={author} />}
        </Box>
      </SimpleGrid>
    </Box>
  );
}
