import { Anchor, Box, createStyles } from '@mantine/core';
import Image from 'next/future/image';
import Link from 'next/link';
import { s } from 'sanity-typed-schema-builder';

import { urlForImage } from '../../lib/sanity';

export const useStyles = createStyles((theme) => ({
  negMarginImage: {
    [theme.fn.smallerThan('sm')]: {
      marginLeft: -16,
      marginRight: -16,
    },
  },
}));

const type = s.image();

interface HeroImageProps {
  title: string;
  slug?: string;
  image: s.infer<typeof type>;
  priority: boolean;
}

export default function HeroImage({ title, slug, image: source, priority }: HeroImageProps) {
  const image = source?.asset?._ref ? (
    <Image
      style={{ maxWidth: '100%', height: 'auto' }}
      width={2000}
      height={1000}
      alt={`Hero image for ${title}`}
      src={urlForImage(source).height(1000).width(2000).url()}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <Box sx={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <Anchor aria-label={title}>{image}</Anchor>
        </Link>
      ) : (
        image
      )}
    </>
  );
}
