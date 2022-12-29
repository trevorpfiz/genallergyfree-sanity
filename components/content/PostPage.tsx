import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

import HeroImage from '#/components/content/hero-image';
import NextPrev from '#/components/content/next-prev';
import ScrollUp from '#/components/ScrollUp';
import { Course, Post } from '#/lib/sanity.queries';
import Breadcrumbs from '#/ui/Breadcrumbs';
import SectionSeparator from '#/ui/SectionSeparator';
import PreviewLayout from '../preview/PreviewLayout';
import { components } from './portable-text-components';

export default function PostPage(props: {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  course: Course;
}) {
  const { preview, loading, post, course } = props;

  const postSlug = post?.slug;
  const courseSlug = course?.slug;

  if (!postSlug && !courseSlug && !preview) {
    notFound();
  }

  return (
    <>
      <ScrollUp />
      <PreviewLayout preview={preview || false} loading={loading}>
        <div>
          <article>
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs />
              <h1 className="mt-6 mb-12 font-display text-5xl font-bold">{post.title}</h1>
              <div className="-mx-4 mb-12 sm:mx-0">
                <HeroImage image={post.heroImage} priority />
              </div>
            </div>

            <div className="mx-auto mb-24 max-w-3xl">
              <PortableText value={post.content} components={components} />
            </div>
          </article>
          <SectionSeparator />
          <NextPrev
            courseSlug={courseSlug}
            sectionOrPostSlug={postSlug}
            courseSections={course?.sections ? course?.sections : []}
          />
        </div>
      </PreviewLayout>
    </>
  );
}
