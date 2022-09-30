import { Box, Container, Group, Button, Title } from '@mantine/core';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={(theme) => ({ backgroundColor: theme.colors.gray[1] })}
    >
      <Container size='xl' px='xl' py={112} mt={164}>
        <Group position='apart'>
          <Title
            order={3}
            size='h1'
            weight='bold'
            sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
          >
            GENALLERGYFREE
          </Title>
          <Button>Temp</Button>
        </Group>
      </Container>
    </Box>
  );
}
