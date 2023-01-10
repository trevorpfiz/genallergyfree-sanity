import Meta from '#/components/seo/Meta';
import MetaDescription from '#/components/seo/MetaDescription';
import { WEBSITE_URL } from '#/lib/constants';
import * as demo from '#/lib/demo.data';
import { getSettings } from '#/lib/sanity.client';

export default async function Head() {
  const { title = demo.title, description = demo.description, ogImage = {} } = await getSettings();
  const ogImageTitle = ogImage?.title || demo.ogImageTitle;

  return (
    <>
      <title>{`Donate | ${title}`}</title>
      <Meta />
      <MetaDescription value={description} />
      <link rel="canonical" href={`${WEBSITE_URL}/donate`} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={`${WEBSITE_URL}/donate`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Donate | ${title}`} />
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
