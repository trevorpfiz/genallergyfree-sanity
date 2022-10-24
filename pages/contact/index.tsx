import { Container } from '@mantine/core';
import Head from 'next/head';
import type { ReactElement } from 'react';

import Intro from '../../components/landing/course-title';
import Layout from '../../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../../lib/constants';
import type { NextPageWithLayout } from '../_app';

const Contact: NextPageWithLayout = () => (
  <>
    <Head>
      <title>{WEBSITE_NAME}</title>
    </Head>
    <Container size="xl" px="0">
      <Intro />
    </Container>
  </>
);

Contact.getLayout = function getLayout(page: ReactElement, pageProps) {
  return (
    <Layout preview={pageProps.preview} headerColor="#FEED00" footerColor="black">
      {page}
    </Layout>
  );
};

export default Contact;
