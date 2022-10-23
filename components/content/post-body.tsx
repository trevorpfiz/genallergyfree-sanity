import { Anchor, Container, Text, Title } from '@mantine/core';
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
      <Title order={1} size={48} mt={48}>
        {children}
      </Title>
    ),
    h2: ({ children }: any) => (
      <Title order={2} size={36} mt={48}>
        {children}
      </Title>
    ),
    h3: ({ children }: any) => (
      <Title order={3} size={28} mt={48}>
        {children}
      </Title>
    ),
    h4: ({ children }: any) => (
      <Title order={4} mt={48}>
        {children}
      </Title>
    ),
    h5: ({ children }: any) => (
      <Title order={5} mt={48}>
        {children}
      </Title>
    ),
    h6: ({ children }: any) => (
      <Title order={6} size={16}>
        {children}
      </Title>
    ),
    intro: ({ children }: any) => (
      <Title order={3} size={28} sx={{ fontWeight: 'normal' }}>
        {children}
      </Title>
    ),
    summary: ({ children }: any) => (
      <Title order={4} size={24} mt={48} sx={{ fontWeight: 'normal' }}>
        {children}
      </Title>
    ),
  },
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug, section, course } = value;
      const href = `/learn/${course}/${section}/${slug}`;
      return (
        <Link href={href} style={{ textDecoration: 'none' }}>
          <Text>{children}</Text>
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
