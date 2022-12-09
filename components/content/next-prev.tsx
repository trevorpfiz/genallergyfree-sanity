'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import { Section } from '#/lib/sanity.queries';
import LinkButton from '#/ui/LinkButton';
import { useEffect, useMemo, useState } from 'react';

interface SlugsList {
  slug: string;
  path: string;
  title: string;
}

export default function NextPrev({
  courseSlug,
  slug,
  courseSections,
}: {
  courseSlug: string;
  slug: string;
  courseSections: Section[];
}) {
  const [prev, setPrev] = useState<SlugsList>({ slug: '', path: '/', title: 'Previous' });
  const [next, setNext] = useState<SlugsList>({ slug: '', path: '/', title: 'Next' });

  const slugs = useMemo(() => {
    const result: SlugsList[] = [];

    courseSections.forEach((section) => {
      result.push({
        slug: section.slug,
        path: `/${section.slug}`,
        title: section.title,
      });

      section?.posts &&
        section?.posts.forEach((post) =>
          result.push({
            slug: post.slug,
            path: `/${section.slug}/${post.slug}`,
            title: post.title,
          })
        );
    });

    return result;
  }, [courseSections]);

  useEffect(() => {
    if (slug) {
      const index = slugs.findIndex((item) => item.slug === slug);

      // nasty typescript error
      const slugsPrev: SlugsList = slugs?.[index - 1] || {
        slug: '',
        path: '/',
        title: 'Dashboard',
      };
      const slugsNext: SlugsList = slugs?.[index + 1] || {
        slug: '',
        path: '/',
        title: 'Dashboard',
      };

      setPrev(slugsPrev);
      setNext(slugsNext);
    }
  }, [slugs, slug]);

  return (
    <div className="mx-auto mt-12 mb-16 max-w-4xl">
      <div className="flex items-center justify-between space-x-2">
        <LinkButton
          href={`/learn/${courseSlug}${prev.path}`}
          intent="primaryInverse"
          className="flex py-3 pl-4 pr-6 text-center text-sm md:text-base"
        >
          <ChevronLeftIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          {prev.title}
        </LinkButton>
        <LinkButton
          href={`/learn/${courseSlug}${next.path}`}
          intent="primaryInverse"
          className="flex py-3 pl-6 pr-4 text-center text-sm md:text-base"
        >
          {next.title}
          <ChevronRightIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
        </LinkButton>
      </div>
    </div>
  );
}
