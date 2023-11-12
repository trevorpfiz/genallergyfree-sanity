import '#/styles/globals.css';
import '#/styles/style.css';
import 'overlayscrollbars/overlayscrollbars.css';

import { getCourse } from '#/lib/sanity.client';
import SidebarLayout from '#/ui/SidebarLayout';

import { Inter, Oswald } from '@next/font/google';
import Script from 'next/script';

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
      {/* <Script
        src="https://cdn.jsdelivr.net/gh/ElektrikSpark/thinkhive-widget@latest/index.min.js"
        data-assistantId="clglu3fpd0003rt0hu30l2zrt"
      /> */}
    </html>
  );
}
