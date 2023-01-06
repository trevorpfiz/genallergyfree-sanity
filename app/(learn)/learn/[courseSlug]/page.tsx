import Link from 'next/link';

import FillImage from '#/components/content/fill-image';
import ScrollUp from '#/components/ScrollUp';
import ScrollUpLearn from '#/components/ScrollUpLearn';
import { getCourse } from '#/lib/sanity.client';

export default async function CourseDashboard({ params }: { params: { courseSlug: string } }) {
  const course = await getCourse(params.courseSlug);

  return (
    <>
      <ScrollUp />
      <ScrollUpLearn />
      <div className="mx-auto mb-24 flex max-w-3xl flex-col gap-6">
        <h1 className="font-display text-4xl font-bold">{course.title}</h1>
        <div className="flex flex-col gap-4">
          {course?.sections &&
            course?.sections.map((section) => (
              <Link href={`/learn/${course.slug}/${section.slug}`} key={section._id}>
                <div className="relative flex h-[92px] items-center space-x-4 overflow-hidden rounded-lg border border-gray-300 bg-white pr-1 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 lg:h-[171px]">
                  <div className="relative aspect-video h-full flex-shrink-0">
                    <FillImage image={section.thumbnail} priority width={300} height={169} />
                  </div>

                  <p className="min-w-0 flex-1 text-sm font-semibold line-clamp-3 sm:text-xl">
                    {section.title}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
