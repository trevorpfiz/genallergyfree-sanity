import { Box } from '@mantine/core';
import Image from 'next/future/image';
import { s } from 'sanity-typed-schema-builder';

import { urlForImage } from '../../lib/sanity';

const type = s.image();

export default function PostImage({ value }: { value: s.infer<typeof type> }) {
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
