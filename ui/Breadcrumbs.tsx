'use client';

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function Breadcrumbs() {
  const pathname = usePathname();

  const course = pathname?.split('/').slice(2)[0];
  const pages = pathname?.split('/').slice(3);

  return (
    <nav className="flex max-w-3xl" aria-label="Breadcrumb">
      <div className="flex items-center space-x-0 overflow-hidden">
        <div className="text-gray-400 hover:text-gray-500">
          <a href={`/learn/${course}`}>
            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Course Home</span>
          </a>
        </div>
        {pages &&
          pages.map((page, i, pagesArray) => {
            if (i + 1 === pagesArray.length) {
              // last/active page
              return (
                <Fragment key={i}>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                    key={i}
                  />
                  <div
                    className="ml-0 min-w-[24px] truncate text-sm font-medium text-gray-700"
                    aria-current="page"
                    key={i + 1}
                  >
                    {page
                      .replace(/-/g, ' ')
                      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
                  </div>
                </Fragment>
              );
            }
            // not last/active page
            return (
              <Fragment key={i}>
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={`/learn/${course}/${pages[0]}`}
                  className="ml-0 min-w-[24px] truncate text-sm font-medium text-gray-400 hover:text-gray-700"
                  aria-current={undefined}
                >
                  {page
                    .replace(/-/g, ' ')
                    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
                </a>
              </Fragment>
            );
          })}
      </div>
    </nav>
  );
}
