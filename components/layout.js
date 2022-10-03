import { Box, Container } from '@mantine/core';

import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Box component='main' sx={{ minHeight: '100vh' }}>
        {/* <AppShell
          padding='md'
          navbar={<Sidebar />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Container size={'xl'}>{children}</Container>
        </AppShell> */}

        <Container size={'xl'}>{children}</Container>
      </Box>
      <Footer />
    </>
  );
}
