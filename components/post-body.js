import { Container } from '@mantine/core';
import { PortableText } from '@portabletext/react';

export default function PostBody({ content }) {
  return (
    <Container size={'sm'} sx={{ fontSize: 18 }}>
      <PortableText value={content} />
    </Container>
  );
}
