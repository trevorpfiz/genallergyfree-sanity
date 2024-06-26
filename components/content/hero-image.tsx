import Image from 'next/image';

import { urlForImage } from '#/lib/sanity.image';

interface HeroImageProps {
  image: any;
  priority: boolean;
}

export default function HeroImage({ image: source, priority = false }: HeroImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      className="h-auto max-h-[432px] w-full object-cover"
      width={768}
      height={432}
      alt={source?.altText ? `${source?.altText}` : 'Hero image'}
      src={urlForImage(source).width(768).url()}
      sizes="(max-width: 768px) 100vw"
      priority={priority}
      placeholder="blur"
      blurDataURL={`${source?.lqip}`}
    />
  ) : (
    <div className="bg-white pt-[50%]" />
  );

  return <>{image}</>;
}
