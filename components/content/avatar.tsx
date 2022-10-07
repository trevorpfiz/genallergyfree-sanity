import { Box, Group, Text } from '@mantine/core';
import Image from 'next/future/image';
import { s } from 'sanity-typed-schema-builder';
import author from 'studio/schemas/authorTyped';

import { urlForImage } from '../../lib/sanity';

export default function Avatar({
  author: { name, picture },
}: {
  author: s.resolved<typeof author>;
}) {
  return (
    <Group align="center">
      <Box sx={{ position: 'relative', width: '48px', height: '48px' }}>
        <Image
          src={
            picture?.asset?._ref
              ? // eslint-disable-next-line newline-per-chained-call
                urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          style={{ borderRadius: '9999px', maxWidth: '100%', height: 'auto' }}
          height={96}
          width={96}
          alt={`${name}`}
        />
      </Box>
      <Text size="xl" weight={700}>
        {name}
      </Text>
    </Group>
  );
}
