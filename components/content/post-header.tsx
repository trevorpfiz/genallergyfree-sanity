import { Box, MediaQuery } from '@mantine/core';
import { PostSanity } from 'additional';

import Avatar from './avatar';
import HeroImage, { useStyles } from './hero-image';
import PostTitle from './post-title';

export default function PostHeader({ post: { title, heroImage, authors } }: { post: PostSanity }) {
  const { classes } = useStyles();

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Box mb="3rem">{authors && <Avatar author={authors[0]} />}</Box>
      </MediaQuery>
      <Box mb="3rem" className={classes.negMarginImage}>
        <HeroImage title={title} image={heroImage} priority />
      </Box>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Box mb="xl">{authors && <Avatar author={authors[0]} />}</Box>
      </MediaQuery>
    </>
  );
}
