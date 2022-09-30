import { Box, Container } from '@mantine/core';

import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Box mb={'3rem'}>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </Box>
      <Box mb={'3rem'}>
        <CoverImage title={title} image={coverImage} priority />
      </Box>
      <Container size={'sm'} sx={{ fontSize: 18 }}>
        <Date dateString={date} />
      </Container>
    </>
  );
}
