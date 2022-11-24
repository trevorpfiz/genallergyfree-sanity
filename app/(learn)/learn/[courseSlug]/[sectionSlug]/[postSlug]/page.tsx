import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import { getAllPostsSlugs, getPost } from '#/lib/sanity.client';
import { Post } from '#/lib/sanity.queries';
import HeroImage from 'components/content/hero-image';
import PostImage from 'components/content/post-image';

const components: any = {
  block: {
    normal: ({ children }: any) => <p className="my-5 text-lg sm:text-xl">{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="mt-12 font-display text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mt-12 font-display text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-12 font-display text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => <h4 className="mt-12 font-display text-lg font-bold">{children}</h4>,
    h5: ({ children }: any) => <h5 className="mt-12 font-display text-lg font-bold">{children}</h5>,
    h6: ({ children }: any) => (
      <h6 className="mt-12 font-display text-base font-bold">{children}</h6>
    ),
    intro: ({ children }: any) => <h3 className="mt-12 text-2xl">{children}</h3>,
    summary: ({ children }: any) => <h4 className="mt-12 text-2xl">{children}</h4>,
  },
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug, section, course } = value;
      const href = `/learn/${course}/${section}/${slug}`;
      return (
        <Link href={href} className="text-blue-500 hover:underline">
          <p>{children}</p>
        </Link>
      );
    },
    link: ({ value, children }: any) => {
      const { blank, href } = value;
      return blank ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      ) : (
        <a href={href} className="text-blue-500 hover:underline">
          {children}
        </a>
      );
    },
    footnote: ({ value, children }: any) => {
      const { blank, href } = value;
      return blank ? (
        <sup>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {children}
          </a>
        </sup>
      ) : (
        <sup>
          <a href={href} className="text-blue-500 hover:underline">
            {children}
          </a>
        </sup>
      );
    },
    sup: ({ text }: any) => <sup>{text}</sup>,
  },
  types: {
    image: PostImage,
  },
};

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