import { Box, SimpleGrid, Title } from '@mantine/core';

import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <Box component='section'>
      <Title
        order={2}
        size='4.5rem'
        weight='bold'
        mb={'xl'}
        sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
      >
        More Stories
      </Title>
      <SimpleGrid cols={2} spacing={128}>
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
