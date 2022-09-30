import { Box, Container } from '@mantine/core';

import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Box component='main' sx={{ minHeight: '100vh' }}>
        <Alert preview={preview} />
        <Container size={'xl'}>{children}</Container>
      </Box>
      <Footer />
    </>
  );
}
