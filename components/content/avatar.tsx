import { Box, Group, Text } from '@mantine/core';
import { BaseAuthorSanity } from 'additional';
import Image from 'next/future/image';

import { urlForImage } from '../../lib/sanity';

export default function Avatar({ author: { name, portrait } }: { author: BaseAuthorSanity }) {
  return (
    <Group align="center">
      <Box sx={{ position: 'relative', width: '48px', height: '48px' }}>
        <Image
          src={
            portrait?.asset?._ref
              ? // eslint-disable-next-line newline-per-chained-call
                urlForImage(portrait).height(96).width(96).fit('crop').url()
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
