import { Box, Container, MediaQuery } from '@mantine/core';

import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
        <Box mb={'3rem'}>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </Box>
      </MediaQuery>
      <Box
        mb={'3rem'}
        sx={{
          '@media (max-width: 768px)': {
            marginLeft: -16,
            marginRight: -16,
          },
        }}
      >
        <CoverImage title={title} image={coverImage} priority />
      </Box>
      <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
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
