import ArticleStructuredData from '#/components/seo/ArticleStructuredData';
import Meta from '#/components/seo/Meta';
import MetaDescription from '#/components/seo/MetaDescription';
import { WEBSITE_URL } from '#/lib/constants';
import * as demo from '#/lib/demo.data';
import { getPost, getSettings } from '#/lib/sanity.client';

export default async function PostHead({
  params,
}: {
  params: { courseSlug: string; sectionSlug: string; postSlug: string };
}) {
  const { title = demo.title, logo = '', ogImage = {} } = await getSettings();

  const ogImageTitle = ogImage?.title || demo.ogImageTitle;

  const post = await getPost(params.postSlug);

  return (
    <>
      <title>{`${post.title} | ${title}`}</title>
      <Meta />
      <MetaDescription value={post.excerpt} />
      <ArticleStructuredData post={post} params={params} logo={logo} />
      <link
        rel="canonical"
        href={`${WEBSITE_URL}/learn/${params.courseSlug}/${params.sectionSlug}/${params.postSlug}`}
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content={`${WEBSITE_URL}/learn/${params.courseSlug}/${params.sectionSlug}/${params.postSlug}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${post.title} | ${title}`} />
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
