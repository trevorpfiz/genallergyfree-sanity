import Link from 'next/link';

import FillImage from '#/components/content/fill-image';
import NextPrev from '#/components/content/next-prev';
import ScrollUp from '#/components/ScrollUp';
import ScrollUpLearn from '#/components/ScrollUpLearn';
import { getCourse, getSection } from '#/lib/sanity.client';
import Breadcrumbs from '#/ui/Breadcrumbs';
import SectionSeparator from '#/ui/SectionSeparator';

// top-down
// export async function generateStaticParams({ params }: any) {
//   const paths = await getSectionSlugs(params.courseSlug);

//   return paths.map((slug: string) => ({ sectionSlug: slug }));
// }

export default async function SectionDashboard({
  params,
}: {
  params: { courseSlug: string; sectionSlug: string };
}) {
  const section = await getSection(params.sectionSlug);
  const course = await getCourse(params.courseSlug);

  return (
    <>
      <ScrollUp />
      <ScrollUpLearn />
      <div>
        <div className="mx-auto mb-24 flex max-w-3xl flex-col gap-6">
          <Breadcrumbs />
          <h1 className="font-display text-4xl font-bold">{section.title}</h1>
          <div className="flex flex-col gap-4">
            {section?.posts &&
              section?.posts.map((post) => (
                <Link
                  href={`/learn/${params.courseSlug}/${section.slug}/${post.slug}`}
                  key={post._id}
                >
                  <div className="relative flex h-[92px] items-center space-x-4 overflow-hidden rounded-lg border border-gray-300 bg-white pr-1 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 lg:h-[171px]">
                    <div className="relative aspect-video h-full flex-shrink-0">
                      <FillImage image={post.heroImage} priority width={300} height={169} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold line-clamp-2 lg:text-xl">{post.title}</p>
                      <p className="text-sm line-clamp-2 lg:text-xl lg:line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <SectionSeparator />
        <NextPrev
          courseSlug={params.courseSlug}
          sectionOrPostSlug={params.sectionSlug}
          courseSections={course?.sections ? course?.sections : []}
        />
      </div>
    </>
  );
}
