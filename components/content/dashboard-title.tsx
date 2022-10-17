import { Title } from '@mantine/core';

export default function Header(props: { title: string }) {
  return (
    <Title
      order={2}
      size="h1"
      weight="bold"
      mt="3rem"
      mb="3rem"
      sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
    >
      {props.title}
    </Title>
  );
}
