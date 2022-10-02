import { Anchor, Box, createStyles } from '@mantine/core';
import Image from 'next/future/image';
import Link from 'next/link';

import { urlForImage } from '../lib/sanity';

export const useStyles = createStyles((theme) => ({
  negMarginImage: {
    [theme.fn.smallerThan('smD')]: {
      marginLeft: -16,
      marginRight: -16,
    },
  },
}));

export default function CoverImage({ title, slug, image: source, priority }) {
  const image = source?.asset?._ref ? (
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
