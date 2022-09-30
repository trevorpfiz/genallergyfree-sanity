import { Group, Title } from '@mantine/core';

export default function Intro() {
  return (
    <Group component='section' position='apart' my={'3rem'}>
      <Title
        order={1}
        size='6rem'
        weight='bold'
        sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
      >
        Blog.
      </Title>
      <Title order={4} weight='normal'>
        A statically generated blog example using Next.js and Sanity.
      </Title>
    </Group>
  );
}
