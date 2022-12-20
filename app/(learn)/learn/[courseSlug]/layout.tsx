import '#/styles/globals.css';
import '#/styles/style.css';
import 'overlayscrollbars/overlayscrollbars.css';

import { getCourse } from '#/lib/sanity.client';
import SidebarLayout from '#/ui/SidebarLayout';

// top-down
// export async function generateStaticParams() {
//   const paths = await getCourseSlugs();

//   return paths.map((slug: string) => ({ courseSlug: slug }));
// }

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
