import { Box, Container } from '@mantine/core';

import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

export default function Layout({
  preview,
  children,
}: {
  preview: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        <Container size="xl">{children}</Container>
      </Box>
      <Footer />
    </>
  );
}
