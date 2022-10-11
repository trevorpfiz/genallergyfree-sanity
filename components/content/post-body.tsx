import { Anchor, Container } from '@mantine/core';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { s } from 'sanity-typed-schema-builder';

import post from 'studio/schemas/postTyped';
import PostImage from './post-image';

const components: any = {
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug = {} } = value;
      const href = `/posts/${slug.current}`;
      return (
        <Link href={href}>
          <Anchor>{children}</Anchor>
        </Link>
      );
    },
    link: ({ value, children }: any) => {
      const { blank, href } = value;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
    footnote: ({ value, children }: any) => {
      const { blank, href } = value;
      return blank ? (
        <sup>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </sup>
      ) : (
        <sup>
          <a href={href}>{children}</a>
        </sup>
      );
    },
  },
  types: {
    image: PostImage,
  },
};

export default function PostBody({ post: { content } }: { post: s.resolved<typeof post> }) {
  return (
    <Container size="sm" sx={{ fontSize: 18 }}>
      <PortableText value={content} components={components} />
    </Container>
  );
}
