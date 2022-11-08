import { Box, Container } from '@mantine/core';
import { PostSanity } from 'additional';

import HeroImage, { useStyles } from './hero-image';
import PostTitle from './post-title';

export default function PostHeader({ post: { title, heroImage } }: { post: PostSanity }) {
  const { classes } = useStyles();

  return (
    <>
      <Container size="sm" px={0} mb="3rem">
        <PostTitle>{title}</PostTitle>

        <Box mb="3rem" className={classes.negMarginImage}>
          <HeroImage title={title} image={heroImage} priority />
        </Box>
      </Container>
    </>
  );
}
