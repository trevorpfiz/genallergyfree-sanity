import { Anchor, Container } from '@mantine/core';
import { PortableText } from '@portabletext/react';
import { PostSanity } from 'additional';
import Link from 'next/link';

import PostImage from './post-image';

const components: any = {
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug, section, course } = value;
      const href = `/learn/${course}/${section}/${slug}`;
      return (
        <Link href={href} passHref>
          <Anchor>{children}</Anchor>
        </Link>
      );
    },
    link: ({ value, children }: any) => {
      const { blank, href } = value;
      return blank ? (
        <Anchor href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Anchor>
      ) : (
        <Anchor href={href}>{children}</Anchor>
      );
    },
    footnote: ({ value, children }: any) => {
      const { blank, href } = value;
      return blank ? (
        <sup>
          <Anchor href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </Anchor>
        </sup>
      ) : (
        <sup>
          <Anchor href={href}>{children}</Anchor>
        </sup>
      );
    },
    sup: ({ text }: any) => <sup>{text}</sup>,
  },
  types: {
    image: PostImage,
  },
};

export default function PostBody({ post: { content } }: { post: PostSanity }) {
  return (
    <Container size="sm" sx={{ fontSize: 18 }}>
      <PortableText value={content} components={components} />
    </Container>
  );
}
