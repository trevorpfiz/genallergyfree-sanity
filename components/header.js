import { Anchor, Title } from '@mantine/core';
import Link from 'next/link';

export default function Header() {
  return (
    <Title
      order={2}
      size={'h1'}
      weight='bold'
      mt={'xl'}
      mb={'5rem'}
      sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
    >
      <Link href='/'>
        <Anchor
          color={'dark.9'}
          sx={{
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Blog
        </Anchor>
      </Link>
      .
    </Title>
  );
}
