import Link from 'next/link';
import { Box, Title, Anchor, SimpleGrid, Text, Paper } from '@mantine/core';

import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Box component='section'>
      <Paper
        shadow='sm'
        mb={64}
        sx={(theme) => ({
          '&:hover': {
            boxShadow: theme.shadows.lg,
          },
          transition: 'box-shadow 200ms',

          '@media (max-width: 768px)': {
            marginLeft: -16,
            marginRight: -16,
            marginBottom: theme.spacing.xl,
          },
        })}
      >
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </Paper>
      <SimpleGrid
        mb={112}
        breakpoints={[{ minWidth: 'sm', cols: 2, spacing: 128 }]}
      >
        <Box>
          <Title
            order={3}
            size='2.75rem'
            weight='normal'
            mb={'md'}
            sx={{ lineHeight: '1.25' }}
          >
            <Link href={`/posts/${slug}`}>
              <Anchor
                color={'dark.9'}
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
          <Text mb={'md'} size={18} sx={{ lineHeight: '1.625' }}>
            {excerpt}
          </Text>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </Box>
      </SimpleGrid>
    </Box>
  );
}
