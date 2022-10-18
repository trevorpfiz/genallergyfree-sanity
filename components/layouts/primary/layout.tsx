import { Box } from '@mantine/core';
import { HeaderNav } from 'components/navigation/header';

import Meta from '../../meta';
import Alert from '../../navigation/alert';
import Footer from '../../navigation/footer';

export default function Layout({
  preview,
  children,
  color,
}: {
  preview: boolean;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <HeaderNav color={color} />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
