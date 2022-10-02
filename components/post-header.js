import { Box, Container, MediaQuery } from '@mantine/core';

import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage, { useStyles } from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  const { classes } = useStyles();

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <MediaQuery smallerThan={'smD'} styles={{ display: 'none' }}>
        <Box mb={'3rem'}>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </Box>
      </MediaQuery>
      <Box mb={'3rem'} className={classes.negMarginImage}>
        <CoverImage title={title} image={coverImage} priority />
      </Box>
      <MediaQuery largerThan={'smD'} styles={{ display: 'none' }}>
        <Box mb={'xl'}>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </Box>
      </MediaQuery>
      <Container size={'sm'} sx={{ fontSize: 18 }}>
        <Date dateString={date} />
      </Container>
    </>
  );
}
