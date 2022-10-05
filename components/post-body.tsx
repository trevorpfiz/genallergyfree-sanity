import { Container } from '@mantine/core';
import { PortableText } from '@portabletext/react';
import { s } from 'sanity-typed-schema-builder';
import post from 'studio/schemas/postTyped';

export default function PostBody({ post: { content } }: { post: s.resolved<typeof post> }) {
  return (
    <Container size="sm" sx={{ fontSize: 18 }}>
      <PortableText value={content} />
    </Container>
  );
}
