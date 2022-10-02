import { Box, SimpleGrid, Title } from '@mantine/core';

import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <Box component='section'>
      <Title
        order={2}
        size='2.75rem'
        weight='bold'
        mb={'xl'}
        sx={(theme) => ({
          lineHeight: '1.25',
          letterSpacing: '-0.025em',

          [theme.fn.largerThan('smD')]: { fontSize: '4.5rem' },
        })}
      >
        More Stories
      </Title>
      <SimpleGrid
        mb={112}
        breakpoints={[{ minWidth: 'smD', cols: 2, spacing: 128 }]}
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
