import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

import { urlForImage } from '#/lib/sanity.image';

export default function PostImage({ value, isInline }: any) {
  const { width, height } = getImageDimensions(value);

  const image = value?.asset?._ref ? (
    <Image
      className="my-4 h-auto max-w-full"
      width={width}
      height={height}
      alt={value?.altText ? `${value?.altText}` : 'Post image'}
      src={urlForImage(value).width(width).url()}
      sizes="(max-width: 768px) 100vw"
      placeholder="blur"
      blurDataURL={`${value?.lqip}`}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  ) : (
    <div className="bg-white pt-[50%]" />
  );

  return image;
}
