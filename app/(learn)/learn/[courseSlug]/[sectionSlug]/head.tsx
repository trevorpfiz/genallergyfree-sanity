import Meta from '#/components/seo/Meta';
import MetaDescription from '#/components/seo/MetaDescription';
import * as demo from '#/lib/demo.data';
import { getSection, getSettings } from '#/lib/sanity.client';

export default async function SectionHead({ params }: { params: { sectionSlug: string } }) {
  const { title = demo.title, description = demo.description, ogImage = {} } = await getSettings();
  const ogImageTitle = ogImage?.title || demo.ogImageTitle;

  const section = await getSection(params.sectionSlug);

  return (
    <>
      <title>{`${section.title} | ${title}`}</title>
      <Meta />
      <MetaDescription value={description} />
      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : 'https://www.generationallergyfree.com/'
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />
    </>
  );
}
