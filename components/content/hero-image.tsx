import { ImagePlusSanity } from 'additional';
import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

interface HeroImageProps {
  image: ImagePlusSanity;
  priority: boolean;
}

export default function HeroImage({ image: source, priority = true }: HeroImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      style={{ width: '100%', height: 'auto', maxHeight: 400, objectFit: 'cover' }}
      width={2000}
      height={1000}
      alt={source?.altText ? `${source?.altText}` : 'Hero image'}
      src={urlForImage(source).width(2000).url()}
      sizes="100vw"
      priority={priority}
      placeholder="blur"
      blurDataURL={`${source?.lqip}`}
    />
  ) : (
    <div className="bg-white pt-[50%]" />
  );

  return <>{image}</>;
}
