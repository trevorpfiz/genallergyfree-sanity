import Meta from '#/components/seo/Meta';
import MetaDescription from '#/components/seo/MetaDescription';
import * as demo from '#/lib/demo.data';
import { getSettings } from '#/lib/sanity.client';

import { WEBSITE_URL } from '#/lib/constants';

export default async function Head() {
  const { title = demo.title, description = demo.description, ogImage = {} } = await getSettings();
  const ogImageTitle = ogImage?.title || demo.ogImageTitle;

  return (
    <>
      <title>{`Terms of Service | ${title}`}</title>
      <Meta />
      <MetaDescription value={description} />
      <link rel="canonical" href={`${WEBSITE_URL}/legal/terms-of-service`} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={`${WEBSITE_URL}/legal/terms-of-service`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Terms of Service | ${title}`} />
      <meta
        name="image"
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `${WEBSITE_URL}`
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
