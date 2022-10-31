import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ContextProvider } from 'contexts/context';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        fontSizes: {
          xs: 12,
          sm: 14,
          md: 16,
          lg: 18,
          xl: 20,
        },
        fontFamily: 'Inter, sans-serif',
        headings: { fontFamily: 'Oswald, sans-serif' },
      }}
    >
      <NotificationsProvider>
        <ContextProvider>{getLayout(<Component {...pageProps} />, pageProps)}</ContextProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}
