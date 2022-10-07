import { Box, Container } from '@mantine/core';

import Alert from '../../alert';
import Meta from '../../meta';
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
