import { Box } from '@mantine/core';
import { HeaderNav } from 'components/navigation/header';

import Meta from '../../meta';
import Alert from '../../navigation/alert';
import Footer from '../../navigation/footer';

export default function Layout({
  preview,
  children,
  headerColor,
  footerColor,
}: {
  preview: boolean;
  children: React.ReactNode;
  headerColor?: string;
  footerColor?: string;
}) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <HeaderNav color={headerColor} />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        {children}
      </Box>
      <Footer color={footerColor} />
    </>
  );
}
