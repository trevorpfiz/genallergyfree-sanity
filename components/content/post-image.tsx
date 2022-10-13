import { Box } from '@mantine/core';
import { ImageSanity } from 'additional';
import Image from 'next/future/image';

import { urlForImage } from '../../lib/sanity';

export default function PostImage({ value }: { value: ImageSanity }) {
  const image = value?.asset?._ref ? (
    <Image
      style={{ width: '100%', height: 'auto' }}
      width={688}
      height={344}
      alt="Hero image for"
      src={urlForImage(value).height(344).width(688).url()}
      sizes="100vw"
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return image;
}
