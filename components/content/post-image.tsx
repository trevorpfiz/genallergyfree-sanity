import { Box } from '@mantine/core';
import { ImagePlusSanity } from 'additional';
import Image from 'next/future/image';

import { urlForImage } from '../../lib/sanity';

export default function PostImage({ value }: { value: ImagePlusSanity }) {
  const image = value?.asset?._ref ? (
    <Image
      style={{ width: '100%', height: 'auto' }}
      width={688}
      height={344}
      alt={value?.altText ? `${value?.altText}` : 'Post image'}
      src={urlForImage(value).width(688).url()}
      sizes="100vw"
      placeholder="blur"
      blurDataURL={`${value?.lqip}`}
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return image;
}
