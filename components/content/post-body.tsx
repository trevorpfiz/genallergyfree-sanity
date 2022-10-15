import { Anchor, Container, Text } from '@mantine/core';
import { PortableText } from '@portabletext/react';
import { PostSanity } from 'additional';
import Link from 'next/link';

import PostImage from './post-image';

const components: any = {
  block: {
    normal: ({ children }: any) => (
      <Text
        component="p"
        size="lg"
        sx={(theme) => ({
          [theme.fn.largerThan('sm')]: { fontSize: theme.fontSizes.xl },
        })}
      >
        {children}
      </Text>
    ),
    h1: ({ children }: any) => (
      <Text component="h1" size={48} mt={48}>
        {children}
      </Text>
    ),
    h2: ({ children }: any) => (
      <Text component="h2" size={36} mt={48}>
        {children}
      </Text>
    ),
    h3: ({ children }: any) => (
      <Text component="h3" size={28} mt={48}>
        {children}
      </Text>
    ),
    h4: ({ children }: any) => (
      <Text component="h4" mt={48}>
        {children}
      </Text>
    ),
    h5: ({ children }: any) => (
      <Text component="h5" mt={48}>
        {children}
      </Text>
    ),
    h6: ({ children }: any) => (
      <Text component="h6" size={16}>
        {children}
      </Text>
    ),
    intro: ({ children }: any) => (
      <Text component="h3" size={28} sx={{ fontWeight: 'normal' }}>
        {children}
      </Text>
    ),
    summary: ({ children }: any) => (
      <Text component="h4" size={24} mt={48} sx={{ fontWeight: 'normal' }}>
        {children}
      </Text>
    ),
  },
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
    <Container
      size="sm"
      px={0}
      sx={{
        fontSize: 18,
        p: {
          minHeight: 18,
        },
      }}
    >
      <PortableText value={content} components={components} />
    </Container>
  );
}
