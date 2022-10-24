import { Box, Container } from '@mantine/core';
import DOMPurify from 'isomorphic-dompurify';
import Head from 'next/head';
import type { ReactElement } from 'react';

import Layout from '../../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../../lib/constants';
import rawHTML from '../../lib/privacy-html';
import type { NextPageWithLayout } from '../_app';

const PrivacyPolicy: NextPageWithLayout = () => (
  <>
    <Head>
      <title>{WEBSITE_NAME}</title>
    </Head>
    <Container size="md" mb={120}>
      <Box sx={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} />
      </Box>
    </Container>
  </>
);

PrivacyPolicy.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <Layout preview={pageProps.preview}>{page}</Layout>;
};

export default PrivacyPolicy;
