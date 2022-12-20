import Image from 'next/image';

import { urlForImage } from '../../lib/sanity.image';

interface FillImageProps {
  image: any;
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
      sizes="(max-width: 768px) 100vw"
      priority={priority}
      placeholder="blur"
      blurDataURL={`${source?.lqip}`}
      className="object-cover"
    />
  ) : (
    <div className="bg-white pt-[50%]" />
  );

  return <>{image}</>;
}
