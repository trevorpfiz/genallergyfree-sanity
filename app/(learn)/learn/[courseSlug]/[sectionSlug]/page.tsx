import Link from 'next/link';

import { SectionSanity } from 'additional';
import FillImage from 'components/content/fill-image';
import { sectionQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';

// top-down
// export async function generateStaticParams({ courseSlug }) {
//   console.log(courseSlug);
//   const paths = await sanityClient.fetch(sectionSlugsQuery, {
//     courseSlug,
//   });

//   return paths.map((slug: string) => ({ sectionSlug: slug }));
// }

async function fetchSection(params: { sectionSlug: string }) {
  const res = await getClient(false).fetch(sectionQuery, {
    slug: params?.sectionSlug,
  });

  return res;
}

export default async function SectionDashboard({
  params,
}: {
  params: { courseSlug: string; sectionSlug: string };
}) {
  const section: SectionSanity = await fetchSection(params);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-bold">{section.title}</h1>
      <div className="flex flex-col gap-4">
        {section?.posts.map((post) => (
          <Link href={`/learn/${params.courseSlug}/${section.slug}/${post.slug}`} key={post._id}>
            <div className="relative flex items-center space-x-4 overflow-hidden rounded-lg border border-gray-300 bg-white pr-1 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
              <div className="relative aspect-video w-[150px] flex-shrink-0 sm:w-[300px]">
                <FillImage image={post.heroImage} priority width={640} height={360} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold sm:text-xl">{post.title}</p>
                <p className="text-sm sm:text-xl">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 60;
