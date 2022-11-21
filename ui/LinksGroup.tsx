'use client';

import { Transition } from '@headlessui/react';
import { IconChevronRight, TablerIcon } from '@tabler/icons';
import { usePathname } from 'next/navigation';
import { Dispatch, forwardRef, SetStateAction, useState } from 'react';

import ActiveLink from '#/ui/ActiveLink';

export interface LinksGroupProps {
  title: string;
  slug: string;
  // eslint-disable-next-line react/no-unused-prop-types
  chapter: string;
  posts?: { title: string; slug: string }[];
  sidebarOpenState: [boolean, Dispatch<SetStateAction<boolean>>];
  params?: { courseSlug: string };
  icon?: TablerIcon;
}

export const LinksGroup = forwardRef<HTMLDivElement, LinksGroupProps>((props, ref) => {
  const {
    title,
    slug: sectionSlug,
    posts,
    sidebarOpenState: [sidebarOpen, setSidebarOpen],
    params,
    icon: Icon,
  }: LinksGroupProps = props;
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  const hasPosts = Array.isArray(posts);
  const ChevronIcon = IconChevronRight;

  const items = (hasPosts ? posts : []).map((post) => (
    <ActiveLink
      key={post.slug}
      href={`/learn/${params?.courseSlug}/${sectionSlug}/${post.slug}`}
      intent={pathname?.endsWith(post.slug) ? 'active' : 'inactive'}
    >
      <button
        type="button"
        className="text-left"
        onClick={sidebarOpen ? () => setSidebarOpen((o) => !o) : undefined}
      >
        <p>{post.title}</p>
      </button>
    </ActiveLink>
  ));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpened((o) => !o)}
        className="block w-full py-3 pl-4 pr-0 font-medium hover:bg-gray-50"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex min-h-[30px] min-w-[30px] items-center justify-center rounded bg-blue-100">
              {Icon && <Icon size={18} color="rgb(34, 139, 230)" />}
            </div>
            <p className="ml-3 text-left text-[13px]">{title}</p>
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
