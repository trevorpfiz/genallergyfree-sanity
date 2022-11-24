'use client';

import IndexPage from 'components/landing/IndexPage';
import { usePreview } from 'lib/sanity.preview';
import { indexQuery, type Course } from 'lib/sanity.queries';

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const courses: Course[] = usePreview(token, indexQuery) || [];

  return <IndexPage preview courses={courses} />;
}
