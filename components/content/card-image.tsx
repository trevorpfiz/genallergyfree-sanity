import { Box, createStyles } from '@mantine/core';
import { ImagePlusSanity } from 'additional';
import Image from 'next/image';
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

interface CardImageProps {
  title: string;
  slug?: string;
  image: ImagePlusSanity;
  priority: boolean;
  width: number;
  height: number;
}

export default function CardImage({
  title,
  slug,
  image: source,
  priority = true,
  width,
  height,
}: CardImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      width={width}
      height={height}
      alt={source?.altText ? `${source?.altText}` : 'Card image'}
      src={urlForImage(source).width(width).height(height).url()}
      sizes="100vw"
      priority={priority}
      placeholder="blur"
      blurDataURL={`${source?.lqip}`}
      style={{ width: '100%', height: 'auto' }}
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <>
      {slug ? (
        <Link href={`/learn/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  );
}
