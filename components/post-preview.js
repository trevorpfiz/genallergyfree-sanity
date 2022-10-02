import { Box, Text, Title, Anchor, Paper } from '@mantine/core';
import Link from 'next/link';

import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage, { useStyles } from './cover-image';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const { classes } = useStyles();

  return (
    <Box>
      <Paper
        shadow='sm'
        mb='lg'
        className={classes.negMarginImage}
        sx={(theme) => ({
          '&:hover': {
            boxShadow: theme.shadows.lg,
          },
          transition: 'box-shadow 200ms',
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
