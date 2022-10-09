import { Anchor, Box, Paper, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { s } from 'sanity-typed-schema-builder';
import post from 'studio/schemas/postTyped';

import Date from '../utils/date';
import Avatar from './avatar';
import HeroImage, { useStyles } from './hero-image';

export default function PostPreview({
  post: { title, heroImage, publishedDate, excerpt, author, slug },
}: {
  post: s.resolved<typeof post>;
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
        <HeroImage slug={slug} title={title} image={heroImage} priority />
      </Paper>
      <Title order={3} size="h1" weight="normal" mb="sm" sx={{ lineHeight: '1.375' }}>
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
      <Box mb="lg" sx={{ fontSize: 18 }}>
        <Date dateCreated={publishedDate} />
      </Box>
      <Text mb="lg" size={18} sx={{ lineHeight: '1.625' }}>
        {excerpt}
      </Text>
      {author && <Avatar author={author} />}
    </Box>
  );
}
