import Meta from '#/components/seo/Meta';
import MetaDescription from '#/components/seo/MetaDescription';
import { WEBSITE_URL } from '#/lib/constants';
import * as demo from '#/lib/demo.data';
import { getSection, getSettings } from '#/lib/sanity.client';

export default async function SectionHead({
  params,
}: {
  params: { courseSlug: string; sectionSlug: string };
}) {
  const { title = demo.title, description = demo.description, ogImage = {} } = await getSettings();
  const ogImageTitle = ogImage?.title || demo.ogImageTitle;

  const section = await getSection(params.sectionSlug);

  return (
    <>
      <title>{`${section.title} | ${title}`}</title>
      <Meta />
      <MetaDescription value={description} />
      <link
        rel="canonical"
        href={`${WEBSITE_URL}/learn/${params.courseSlug}/${params.sectionSlug}`}
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content={`${WEBSITE_URL}/learn/${params.courseSlug}/${params.sectionSlug}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${section.title} | ${title}`} />
      <meta
        property="og:image"
        content={`${
          // eslint-disable-next-line prefer-template
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : `${WEBSITE_URL}`
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
