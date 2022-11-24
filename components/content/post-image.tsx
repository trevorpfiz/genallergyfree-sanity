import Image from 'next/image';

import { urlForImage } from '../../lib/sanity.image';

export default function PostImage({ value }: any) {
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
    <div className="bg-white pt-[50%]" />
  );

  return image;
}
