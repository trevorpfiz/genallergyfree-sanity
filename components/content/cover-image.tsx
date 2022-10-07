import { Anchor, Box, createStyles } from '@mantine/core';
import Image from 'next/future/image';
import Link from 'next/link';

import { urlForImage } from '../../lib/sanity';

export const useStyles = createStyles((theme) => ({
  negMarginImage: {
    [theme.fn.smallerThan('sm')]: {
      marginLeft: -16,
      marginRight: -16,
    },
  },
}));

interface CoverImageProps {
  title: string;
  slug?: string; // look into ways to optionally pass slug
  image: any; // and pass image type from sanity
  priority: boolean;
}

export default function CoverImage({ title, slug, image: source, priority }: CoverImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      style={{ maxWidth: '100%', height: 'auto' }}
      width={2000}
      height={1000}
      alt={`Cover image for ${title}`}
      src={urlForImage(source).height(1000).width(2000).url()}
      sizes="100vw"
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
