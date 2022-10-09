import { Box, Container, MediaQuery } from '@mantine/core';
import { s } from 'sanity-typed-schema-builder';
import post from 'studio/schemas/postTyped';

import Date from '../utils/date';
import Avatar from './avatar';
import HeroImage, { useStyles } from './hero-image';
import PostTitle from './post-title';

export default function PostHeader({
  post: { title, heroImage, publishedDate, author },
}: {
  post: s.resolved<typeof post>;
}) {
  const { classes } = useStyles();

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Box mb="3rem">{author && <Avatar author={author} />}</Box>
      </MediaQuery>
      <Box mb="3rem" className={classes.negMarginImage}>
        <HeroImage title={title} image={heroImage} priority />
      </Box>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Box mb="xl">{author && <Avatar author={author} />}</Box>
      </MediaQuery>
      <Container size="sm" sx={{ fontSize: 18 }}>
        <Date dateCreated={publishedDate} />
      </Container>
    </>
  );
}
