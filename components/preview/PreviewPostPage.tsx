'use client';

import { usePreview } from '#/lib/sanity.preview';
import { courseQuery, postQuery, type Course, type Post } from '#/lib/sanity.queries';
import PostPage from '../content/PostPage';

export default function PreviewPostPage({
  token,
  postSlug,
  courseSlug,
}: {
  token: null | string;
  postSlug: string;
  courseSlug: string;
}) {
  // console.log(postSlug);
  const post: Post =
    usePreview(token, postQuery, {
      postSlug,
    }) || null;
  const course: Course =
    usePreview(token, courseQuery, {
      courseSlug,
    }) || null;

  return <PostPage preview post={post} course={course} />;
}
