/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { Transition } from '@headlessui/react';
import { IconChevronRight, TablerIcon } from '@tabler/icons';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import ActivePost from '#/ui/ActivePost';
import ActiveSection from './ActiveSection';

export const transitionClasses = {
  enter: 'transition-opacity duration-200 ease',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity duration-100 ease',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

// export const transitionClasses = {
//   enter: 'transition ease duration-500 transform',
//   enterFrom: 'opacity-0 -translate-y-6',
//   enterTo: 'opacity-100 translate-y-0',
//   leave: 'transition ease duration-300 transform',
//   leaveFrom: 'opacity-100 translate-y-0',
//   leaveTo: 'opacity-0 -translate-y-6',
// };

export interface LinksGroupProps {
  title: string;
  slug: string;
  // eslint-disable-next-line react/no-unused-prop-types
  chapter: string;
  posts?: { title: string; slug: string }[];
  sidebarOpenState: [boolean, Dispatch<SetStateAction<boolean>>];
  params?: { courseSlug: string };
  icon?: TablerIcon;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const LinksGroup = (props: LinksGroupProps) => {
  const {
    title,
    slug: sectionSlug,
    posts,
    sidebarOpenState: [sidebarOpen, setSidebarOpen],
    params,
    icon: Icon,
    scrollRef,
  } = props;
  const pathname = usePathname();
  const urlParts = pathname?.split('/').slice(2) as string[];

  const activeSection = urlParts[1] === sectionSlug && !urlParts[2];

  const [opened, setOpened] = useState(pathname?.split('/').slice(2)[1] === sectionSlug || false);

  const hasPosts = Array.isArray(posts);
  const ChevronIcon = IconChevronRight;

  function sectionCloseSidebar() {
    // clear scroll lock
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('style', '');
    // close sidebar on mobile
    sidebarOpen ? setSidebarOpen((o) => !o) : undefined;

    // set opened to true
    setOpened(true);
  }

  function postCloseSidebar() {
    // clear scroll lock
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('style', '');
    // close sidebar on mobile
    sidebarOpen ? setSidebarOpen((o) => !o) : undefined;
  }

  function clickChevron(e: React.MouseEvent) {
    // stop next/link
    e.preventDefault();
    e.stopPropagation();

    // toggle opened
    setOpened((o) => !o);
  }

  const items = (hasPosts ? posts : []).map((post) => {
    const activePost = urlParts[2] === post.slug;

    return (
      <ActivePost
        key={post.slug}
        href={`/learn/${params?.courseSlug}/${sectionSlug}/${post.slug}`}
        intent={activePost ? 'active' : 'inactive'}
        onClick={postCloseSidebar}
      >
        <p className="scroll-mt-72" ref={activePost ? scrollRef : null}>
          {post.title}
        </p>
      </ActivePost>
    );
  });

  useEffect(() => {
    if (sidebarOpen && scrollRef.current) {
      scrollRef.current.scrollIntoView(true);
    }
  }, [sidebarOpen, scrollRef]);

  return (
    <li>
      <ActiveSection
        href={`/learn/${params?.courseSlug}/${sectionSlug}`}
        intent={activeSection ? 'active' : 'inactive'}
        onClick={sectionCloseSidebar}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex min-h-[30px] min-w-[30px] items-center justify-center rounded bg-blue-100">
              {Icon && <Icon size={18} color="rgb(34, 139, 230)" />}
            </div>
            <p
              className="ml-3 scroll-mt-72 text-left text-[13px]"
              ref={activeSection ? scrollRef : null}
            >
              {title}
            </p>
          </div>
          {hasPosts && (
            <button
              type="button"
              className="p-1 hover:bg-gray-800/5"
              onClick={(e) => clickChevron(e)}
            >
              <ChevronIcon
                size={18}
                stroke={1.5}
                className="transition-transform duration-200"
                style={{
                  transform: opened ? 'rotate(90deg)' : 'none',
                }}
              />
            </button>
          )}
        </div>
      </ActiveSection>
      {hasPosts ? (
        <Transition show={opened} {...transitionClasses}>
          {items}
        </Transition>
      ) : null}
    </li>
  );
};
