import { Box } from '@mantine/core';
import { ImagePlusSanity } from 'additional';
import Image from 'next/future/image';

import { urlForImage } from '../../lib/sanity';

interface DashboardImageProps {
  image: ImagePlusSanity;
  priority: boolean;
  width: number;
  height: number;
}

// const css = { width: '100%', height: 'auto' };

export default function DashboardImage({
  image: source,
  priority = true,
  width,
  height,
}: DashboardImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      fill
      alt={source?.altText ? `${source?.altText}` : 'Hero image'}
      src={urlForImage(source).width(width).height(height).url()}
      sizes="100vw"
      priority={priority}
      // placeholder="blur"
      // blurDataURL={`${source?.lqip}`}
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return <>{image}</>;
}
