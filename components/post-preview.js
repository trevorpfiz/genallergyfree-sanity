import { Box, Text, Title, Anchor, Paper } from '@mantine/core';
import Link from 'next/link';

import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Box>
      <Paper
        shadow='sm'
        mb='lg'
        sx={(theme) => ({
          '&:hover': {
            boxShadow: theme.shadows.lg,
          },
          transition: 'box-shadow 200ms',

          '@media (max-width: 768px)': {
            marginLeft: -16,
            marginRight: -16,
          },
        })}
      >
        <CoverImage slug={slug} title={title} image={coverImage} />
      </Paper>
      <Title
        order={3}
        size={'h1'}
        weight='normal'
        mb={'sm'}
        sx={{ lineHeight: '1.375' }}
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
      <Box mb={'lg'} sx={{ fontSize: 18 }}>
        <Date dateString={date} />
      </Box>
      <Text mb={'lg'} size={18} sx={{ lineHeight: '1.625' }}>
        {excerpt}
      </Text>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </Box>
  );
}
