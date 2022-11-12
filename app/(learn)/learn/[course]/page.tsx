import { CourseSanity } from 'additional';
import FillImage from 'components/content/fill-image';
import { courseQuery, courseSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity.server';
import Link from 'next/link';

export async function generateStaticParams() {
  const paths = await sanityClient.fetch(courseSlugsQuery);

  return paths.map((slug: string) => ({ course: slug }));
}

async function fetchCourse(params: { course: string }) {
  const res = await getClient(false).fetch(courseQuery, {
    slug: params?.course,
  });

  return res;
}

export default async function CourseDashboard({ params }: { params: { course: string } }) {
  const course: CourseSanity = await fetchCourse(params);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-bold">{course.title}</h1>
      <div className="flex flex-col gap-4">
        {course?.sections.map((section) => (
          <Link href={`/learn/${course.slug}/${section.slug}`} key={section._id}>
            <div className="relative flex items-center space-x-4 overflow-hidden rounded-lg border border-gray-300 bg-white pr-1 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
              <div className="relative aspect-video w-[150px] flex-shrink-0 sm:w-[300px]">
                <FillImage image={section.thumbnail} priority width={640} height={360} />
              </div>

              <p className="min-w-0 flex-1 text-sm font-semibold sm:text-xl">{section.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 60;
