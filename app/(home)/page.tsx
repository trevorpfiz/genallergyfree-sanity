import { previewData } from 'next/headers';

import IndexPage from '#/components/landing/IndexPage';
import PreviewIndexPage from '#/components/preview/PreviewIndexPage';
import { PreviewSuspense } from '#/components/preview/PreviewSuspense';
import { getAllCourses } from '#/lib/sanity.client';

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [courses] = await Promise.all([getAllCourses()]);

  if (previewData()) {
    const token = previewData().token || null;

    return (
      <PreviewSuspense fallback={<IndexPage loading preview courses={courses} />}>
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    );
  }

  return <IndexPage courses={courses} />;
}
