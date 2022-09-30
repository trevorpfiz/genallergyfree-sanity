import { Title } from '@mantine/core';

export default function PostTitle({ children }) {
  return (
    <Title
      order={1}
      size={'6rem'}
      weight='bold'
      mb={'3rem'}
      sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
    >
      {children}
    </Title>
  );
}
