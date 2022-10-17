import { Container } from '@mantine/core';
import Head from 'next/head';
import type { ReactElement } from 'react';

import Intro from '../../components/content/course-title';
import Layout from '../../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../../lib/constants';
import type { NextPageWithLayout } from '../_app';

const PrivacyPolicy: NextPageWithLayout = () => (
  <>
    <Head>
      <title>{WEBSITE_NAME}</title>
    </Head>
    <Container fluid px="0">
      <Intro />
    </Container>
  </>
);

PrivacyPolicy.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <Layout preview={pageProps.preview}>{page}</Layout>;
};

export default PrivacyPolicy;
