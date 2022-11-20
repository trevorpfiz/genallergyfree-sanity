import 'app/globals.css';

import { CourseSanity } from 'additional';
import { courseQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import SidebarLayout from '../../../../ui/SidebarLayout';

async function fetchCourse(params: { courseSlug: string }) {
  const res = await getClient(false).fetch(courseQuery, {
    slug: params?.courseSlug,
  });

  return res;
}

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseSlug: string };
}) {
  const course: CourseSanity = await fetchCourse(params);

  return (
    <SidebarLayout linksData={course?.sections} params={params}>
      {children}
    </SidebarLayout>
  );
}

export const revalidate = 60;
