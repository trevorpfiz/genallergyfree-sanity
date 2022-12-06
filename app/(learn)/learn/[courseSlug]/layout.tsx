import '#/styles/globals.css';
import 'overlayscrollbars/overlayscrollbars.css';

import { getCourse } from '#/lib/sanity.client';
import SidebarLayout from '#/ui/SidebarLayout';

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseSlug: string };
}) {
  const course = await getCourse(params.courseSlug);

  return (
    <SidebarLayout linksData={course?.sections ? course?.sections : []} params={params}>
      {children}
    </SidebarLayout>
  );
}

export const revalidate = 60;
