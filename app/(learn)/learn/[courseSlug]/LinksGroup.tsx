'use client';

import { IconChevronRight } from '@tabler/icons';
import { forwardRef, useState } from 'react';

import { Transition } from '@headlessui/react';
import ActiveLink from 'components/utils/active-link';

export interface LinksGroupProps {
  title: string;
  slug: string;
  // eslint-disable-next-line react/no-unused-prop-types
  chapter: string;
  posts?: { title: string; slug: string }[];
  sidebarOpenState: [boolean, React.Dispatch<boolean>];
  params: { courseSlug: string };
}

export const LinksGroup = forwardRef<HTMLDivElement, LinksGroupProps>((props, ref) => {
  const {
    title,
    slug: sectionSlug,
    posts,
    sidebarOpenState: [sidebarOpen, setSidebarOpen],
    params,
  }: LinksGroupProps = props;
  const [opened, setOpened] = useState(false);

  const hasPosts = Array.isArray(posts);
  const ChevronIcon = IconChevronRight;

  const items = (hasPosts ? posts : []).map((post) => (
    <ActiveLink
      key={post.title}
      href={`/learn/${params.courseSlug}/${sectionSlug}/${post.slug}`}
      slug={post.slug}
      activeClassName="ml-[22px] block border-l border-l-red-700 pl-[27px] font-medium"
      defaultClassName="ml-[22px] block border-l border-l-gray-900 pl-[27px] font-medium"
    >
      <button type="button" onClick={sidebarOpen ? () => setSidebarOpen((o) => !o) : undefined}>
        <p className="text-[13px]">{post.title}</p>
      </button>
    </ActiveLink>
  ));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpened((o) => !o)}
        className="block w-full font-medium"
      >
        <div className="flex">
          <div className="flex items-center">
            <p className="text-[13px]">{title}</p>
          </div>
          {hasPosts && (
            <ChevronIcon
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
        </div>
      </button>
      {hasPosts ? (
        <Transition
          show={opened}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {items}
        </Transition>
      ) : null}
    </>
  );
});
