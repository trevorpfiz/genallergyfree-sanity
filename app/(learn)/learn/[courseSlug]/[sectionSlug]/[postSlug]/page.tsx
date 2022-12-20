import { previewData } from 'next/headers';

import PostPage from '#/components/content/PostPage';
import PreviewPostPage from '#/components/preview/PreviewPostPage';
import { PreviewSuspense } from '#/components/preview/PreviewSuspense';
import { getAllPostSlugs, getCourse, getPost } from '#/lib/sanity.client';
import { Post } from '#/lib/sanity.queries';

// check if docsearch works without this, maybe can use notFound()
// export const dynamicParams = false;

// top-down
// export async function generateStaticParams({ params }: any) {
//   const paths = await getPostSlugs(params.sectionSlug);

//   return paths.map((slug: string) => ({ postSlug: slug }));
// }

// bottom-up
export async function generateStaticParams() {
  const paths = await getAllPostSlugs();

  function loopParams(posts: Post[]) {
    const params: { courseSlug: string; sectionSlug: string; postSlug: string }[] = [];

    posts.forEach((post) => {
      const postSlug = post?.slug;
      post?.sections?.forEach((section) => {
        const sectionSlug = section?.slug;
        section?.courses?.forEach((course) => {
          const courseSlug = course?.slug;

          params.push({ courseSlug, sectionSlug, postSlug });
        });
      });
    });

    return params;
  }

  return loopParams(paths);
}

export default async function PostRoute({
  params,
}: {
  params: { courseSlug: string; postSlug: string };
}) {
  if (previewData()) {
    const token = previewData().token || null;
    const post = getPost(params.postSlug, token);
    const course = getCourse(params.courseSlug, token);

    return (
      <PreviewSuspense
        fallback={<PostPage loading preview post={await post} course={await course} />}
      >
        <PreviewPostPage token={token} postSlug={params.postSlug} courseSlug={params.courseSlug} />
      </PreviewSuspense>
    );
  }

  const post = getPost(params.postSlug);
  const course = getCourse(params.courseSlug);

  return <PostPage post={await post} course={await course} />;
}
