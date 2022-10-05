import { Box, SimpleGrid, Title } from '@mantine/core';
import { s } from 'sanity-typed-schema-builder';
import postTyped from 'studio/schemas/postTyped';

import PostPreview from './post-preview';

export default function MoreStories({ posts }: { posts: s.resolved<typeof postTyped>[] }) {
  return (
    <Box component="section">
      <Title
        order={2}
        size="2.75rem"
        weight="bold"
        mb="xl"
        sx={(theme) => ({
          lineHeight: '1.25',
          letterSpacing: '-0.025em',

          [theme.fn.largerThan('sm')]: { fontSize: '4.5rem' },
        })}
      >
        More Stories
      </Title>
      <SimpleGrid mb={112} breakpoints={[{ minWidth: 'sm', cols: 2, spacing: 128 }]}>
        {posts.map((post, index) => (
          <PostPreview key={index} post={post} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
