import Image from 'next/image';

import { urlForImage } from '../../lib/sanity.image';

export default function PostImage({ value }: any) {
  const image = value?.asset?._ref ? (
    <Image
      className="my-4 h-auto max-w-full"
      width={768}
      height={432}
      alt={value?.altText ? `${value?.altText}` : 'Post image'}
      src={urlForImage(value).width(1920).url()}
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      placeholder="blur"
      blurDataURL={`${value?.lqip}`}
    />
  ) : (
    <div className="bg-white pt-[50%]" />
  );

  return image;
}
