import { Box } from '@mantine/core';
import { ImagePlusSanity } from 'additional';
import Image from 'next/future/image';

import { urlForImage } from '../../lib/sanity';

interface FillImageProps {
  image: ImagePlusSanity;
  priority: boolean;
  width: number;
  height: number;
}

export default function FillImage({
  image: source,
  priority = true,
  width,
  height,
}: FillImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      fill
      alt={source?.altText ? `${source?.altText}` : 'Image'}
      src={urlForImage(source).width(width).height(height).url()}
      sizes="100vw"
      priority={priority}
      placeholder="blur"
      blurDataURL={`${source?.lqip}`}
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return <>{image}</>;
}
