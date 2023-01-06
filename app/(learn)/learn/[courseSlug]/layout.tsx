import '#/styles/globals.css';
import '#/styles/style.css';
import 'overlayscrollbars/overlayscrollbars.css';

import { getCourse } from '#/lib/sanity.client';
import SidebarLayout from '#/ui/SidebarLayout';

import { Inter, Oswald } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
});

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
    <html
      lang="en"
      id="scroll"
      className={`${inter.variable} ${oswald.variable} h-full overflow-auto`}
    >
      <body className="h-full">
        <SidebarLayout linksData={course?.sections ? course?.sections : []} params={params}>
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
