import { Box, Container } from '@mantine/core';

import Meta from '../../meta';
import Alert from '../../navigation/alert';
import Footer from '../../navigation/footer';

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
