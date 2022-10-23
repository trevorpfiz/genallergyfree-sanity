import { Box } from '@mantine/core';
import { ImagePlusSanity } from 'additional';
import Image from 'next/image';

import { urlForImage } from '../../lib/sanity';

export default function PostImage({ value }: { value: ImagePlusSanity }) {
  const image = value?.asset?._ref ? (
    <Image
      style={{ width: '100%', height: 'auto' }}
      width={720}
      height={480}
      alt={value?.altText ? `${value?.altText}` : 'Post image'}
      src={urlForImage(value).width(720).url()}
      sizes="100vw"
      placeholder="blur"
      blurDataURL={`${value?.lqip}`}
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return image;
}
