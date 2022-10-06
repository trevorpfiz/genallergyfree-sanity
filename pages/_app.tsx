import { MantineProvider } from '@mantine/core';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        {getLayout(<Component {...pageProps} />, pageProps)}
      </MantineProvider>
    </>
  );
}
