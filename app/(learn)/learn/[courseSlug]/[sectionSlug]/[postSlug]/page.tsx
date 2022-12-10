import PostPage from '#/components/content/PostPage';
import PreviewPostPage from '#/components/preview/PreviewPostPage';
import { getAllPostsSlugs, getCourse, getPost } from '#/lib/sanity.client';
import { Post } from '#/lib/sanity.queries';
import { PreviewSuspense } from 'next-sanity/preview';
import { previewData } from 'next/headers';

// top-down
// export async function generateStaticParams({ sectionSlug }) {
//   const paths = await sanityClient.fetch(postSlugsQuery, {
//     sectionSlug,
//   });

//   return paths.map((slug: string) => ({ postSlug: slug }));
// }

// check if docsearch works without this, maybe can use notFound()
// export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = await getAllPostsSlugs();

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
