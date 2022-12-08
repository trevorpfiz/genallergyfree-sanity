/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  IconBlockquote,
  IconChecklist,
  IconNotes,
  IconNumber0,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
  IconNumber7,
  IconNumber8,
  IconNumber9,
} from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Fragment, useEffect, useRef, useState } from 'react';

import { Section } from '#/lib/sanity.queries';
import logo from '#/public/genallergyfree-upscaled-crop.jpg';
import { LinksGroup } from './LinksGroup';
import Search from './Search';

const chapterToIcon = {
  disclaimer: IconNotes,
  0: IconNumber0,
  1: IconNumber1,
  2: IconNumber2,
  3: IconNumber3,
  4: IconNumber4,
  5: IconNumber5,
  6: IconNumber6,
  7: IconNumber7,
  8: IconNumber8,
  9: IconNumber9,
  checklist: IconChecklist,
  citations: IconBlockquote,
};

function addIcon(links: Section[]) {
  return links.map((section) => {
    const key = section.chapter as keyof typeof chapterToIcon;
    if (key in chapterToIcon) {
      return { ...section, icon: chapterToIcon[key] };
    }
    return { ...section, icon: IconNotes };
  });
}

export default function SidebarLayout({
  children,
  linksData,
  params,
}: {
  children: React.ReactNode;
  linksData: Section[];
  params: { courseSlug: string };
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const links = addIcon(linksData).map((section) => (
    <LinksGroup
      {...section}
      ref={scrollRef}
      key={section._id}
      sidebarOpenState={[sidebarOpen, setSidebarOpen]}
      params={params}
    />
  ));

  useEffect(() => {
    if (sidebarOpen) {
      const timer = setTimeout(() => {
        scrollRef.current?.scrollIntoView();
      }, 1);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [sidebarOpen]);

  return (
    <>
      <div className="h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4 pb-7 shadow">
                    <Link href="/">
                      <Image
                        src={logo}
                        alt="Generation Allergy Free Logo"
                        style={{ width: '180px', height: '16px' }}
                        priority
                      />
                    </Link>
                  </div>
                  <div className="h-0 flex-1 overflow-y-auto">
                    <nav className="pt-1 pb-6">{links}</nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden h-full md:fixed md:inset-y-0 md:flex md:w-80">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex h-full flex-grow flex-col border-r border-r-gray-200 bg-white pt-5">
            <div className="flex flex-shrink-0 items-center px-4 pb-7 shadow">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Generation Allergy Free Logo"
                  style={{ width: '180px', height: '16px' }}
                  priority
                />
              </Link>
            </div>
            <div className="flex h-0 flex-1 flex-col">
              <OverlayScrollbarsComponent
                options={{
                  overflow: {
                    x: 'hidden',
                    y: 'scroll',
                  },
                  scrollbars: { autoHide: 'leave', autoHideDelay: 0 },
                }}
              >
                <nav className="flex-1 pt-1 pb-6">{links}</nav>
              </OverlayScrollbarsComponent>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="flex h-full flex-1 flex-col md:pl-80">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-end px-4">
              {/* DocSearch */}
              <div className="flex items-center">
                <Search courseSlug={params.courseSlug} />
              </div>
              {/* User */}
            </div>
          </div>

          <main className="overflow-y-auto">
            <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
