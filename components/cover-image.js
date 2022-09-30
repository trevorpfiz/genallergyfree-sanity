import { Anchor, Box, Paper } from '@mantine/core';
import Image from 'next/future/image';
import Link from 'next/link';

import { urlForImage } from '../lib/sanity';

export default function CoverImage({ title, slug, image: source, priority }) {
  const image = source?.asset?._ref ? (
    <Paper
      shadow='sm'
      sx={(theme) => ({
        '&:hover': {
          boxShadow: theme.shadows.lg,
        },
        transition: 'box-shadow 200ms',
      })}
    >
      <Image
        style={{ maxWidth: '100%', height: 'auto' }}
        layout='responsive'
        width={2000}
        height={1000}
        alt={`Cover image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes='100vw'
        priority={priority}
      />
    </Paper>
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <Anchor aria-label={title}>{image}</Anchor>
        </Link>
      ) : (
        image
      )}
    </>
  );
}
