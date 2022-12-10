import Image from 'next/image';

import { urlForImage } from '#/lib/sanity.image';

interface HeroImageProps {
  image: any;
  priority: boolean;
}

export default function HeroImage({ image: source, priority = true }: HeroImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      className="h-auto max-h-[432px] w-full object-cover"
      width={768}
      height={432}
      alt={source?.altText ? `${source?.altText}` : 'Hero image'}
      src={urlForImage(source).width(1920).url()}
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      priority={priority}
      placeholder="blur"
      blurDataURL={`${source?.lqip}`}
    />
  ) : (
    <div className="bg-white pt-[50%]" />
  );

  return <>{image}</>;
}
