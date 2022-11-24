import IndexPage from '#/components/landing/IndexPage';
import { getAllCourses } from 'lib/sanity.client';
import { lazy } from 'react';

const PreviewIndexPage = lazy(() => import('#/components/preview/PreviewIndexPage'));

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [courses] = await Promise.all([getAllCourses()]);

  /*
  // FIXME: https://github.com/sanity-io/nextjs-blog-cms-sanity-v3/issues/95
  import { previewData } from 'next/headers'
  import { PreviewSuspense } from 'components/PreviewSuspense'
  if (previewData()) {
    const token = previewData().token || null
    return (
      <PreviewSuspense
        fallback={<IndexPage loading preview posts={posts} settings={settings} />}
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }
  // */

  return <IndexPage courses={courses} />;
}

export const revalidate = 60;
