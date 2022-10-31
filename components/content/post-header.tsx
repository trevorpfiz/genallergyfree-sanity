import { Box } from '@mantine/core';
import { PostSanity } from 'additional';

import HeroImage, { useStyles } from './hero-image';
import PostTitle from './post-title';

export default function PostHeader({ post: { title, heroImage } }: { post: PostSanity }) {
  const { classes } = useStyles();

  return (
    <>
      <PostTitle>{title}</PostTitle>

      <Box mb="3rem" className={classes.negMarginImage}>
        <HeroImage title={title} image={heroImage} priority />
      </Box>
    </>
  );
}
