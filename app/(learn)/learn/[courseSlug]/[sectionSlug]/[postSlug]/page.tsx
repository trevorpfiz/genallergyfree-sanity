import { PortableText } from '@portabletext/react';

import HeroImage from '#/components/content/hero-image';
import { getAllPostsSlugs, getPost } from '#/lib/sanity.client';
import { Post } from '#/lib/sanity.queries';
import Breadcrumbs from '#/ui/Breadcrumbs';
import { components } from './portable-text-components';

// top-down
// export async function generateStaticParams({ sectionSlug }) {
//   const paths = await sanityClient.fetch(postSlugsQuery, {
//     sectionSlug,
//   });

//   return paths.map((slug: string) => ({ postSlug: slug }));
// }

export async function generateStaticParams() {
  const paths = await getAllPostsSlugs();

  function loopParams(posts: Post[]) {
    return posts.flatMap(
      (post) =>
        post?.sections &&
        post?.sections.flatMap(
          (section) =>
            section?.courses &&
            section?.courses.flatMap((course) => ({
              courseSlug: course.slug,
              sectionSlug: section.slug,
              postSlug: post.slug,
            }))
        )
    );
  }

  return loopParams(paths);
}

export default async function PostPage({ params }: { params: { postSlug: string } }) {
  const post = await getPost(params.postSlug);

  return (
    <div>
      <article>
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs />
          <h1 className="my-12 font-display text-5xl font-bold">{post.title}</h1>
          <div className="-mx-4 mb-12 sm:mx-0">
            <HeroImage image={post.heroImage} priority />
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-3xl">
          <PortableText value={post.content} components={components} />
        </div>
      </article>
    </div>
  );
}

export const revalidate = 60;
