import { Container } from '@mantine/core';
import { SectionSanity } from 'additional';
import SidebarLayout from 'components/layouts/sidebar/sidebar-layout';
import { GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import PostTitle from '../../../../components/content/post-title';
import Header from '../../../../components/navigation/header';
import SectionSeparator from '../../../../components/utils/section-separator';
import { WEBSITE_NAME } from '../../../../lib/constants';
import { sectionQuery, sectionSlugsQuery } from '../../../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../../../lib/sanity';
import { getClient, sanityClient } from '../../../../lib/sanity.server';
import type { NextPageWithLayout } from '../../../_app';

interface SectionProps {
  data: DataProps;
  preview: boolean;
}

interface DataProps {
  section?: SectionSanity;
}

const Section: NextPageWithLayout<SectionProps> = ({ data = {}, preview }) => {
  const router = useRouter();

  const slug = data?.section?.slug;
  const {
    data: { section },
  } = usePreviewSubscription(sectionQuery, {
    params: { slug },
    initialData: data,
    enabled: preview,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container fluid px="0">
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${section?.title} | ${WEBSITE_NAME}`}</title>
              {section?.thumbnail?.asset?._ref && (
                <meta
                  key="ogImage"
                  property="og:image"
                  // eslint-disable-next-line newline-per-chained-call
                  content={urlForImage(section.thumbnail).width(1200).height(627).fit('crop').url()}
                />
              )}
            </Head>
          </article>
          <SectionSeparator />
        </>
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const section = await getClient(preview).fetch(sectionQuery, {
    slug: params?.section,
  });

  return {
    props: {
      preview,
      data: {
        section,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
};

export async function getStaticPaths() {
  const paths: SectionSanity[] = await sanityClient.fetch(sectionSlugsQuery);

  function loopParams(sections: SectionSanity[]) {
    return sections.flatMap((section) =>
      section.courses.flatMap((course) => ({
        params: { course: course.slug, section: section.slug },
      }))
    );
  }

  return {
    paths: loopParams(paths),
    fallback: true,
  };
}

Section.getLayout = function getLayout(page: ReactElement, pageProps) {
  return <SidebarLayout preview={pageProps.preview}>{page}</SidebarLayout>;
};

export default Section;
