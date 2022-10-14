import { Box } from '@mantine/core';
import { ImageWithAltSanity } from 'additional';
import Image from 'next/future/image';

import { urlForImage } from '../../lib/sanity';

export default function PostImage({ value }: { value: ImageWithAltSanity }) {
  const image = value?.asset?._ref ? (
    <Image
      style={{ width: '100%', height: 'auto' }}
      width={688}
      height={344}
      alt={value?.altText ? `${value?.altText}` : 'Post image'}
      src={urlForImage(value).width(688).url()}
      sizes="100vw"
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return image;
}
