'use client';

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();

  const course = pathname?.split('/').slice(2)[0];
  const pages = pathname?.split('/').slice(3);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href={`/learn/${course}`} className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Course Home</span>
            </a>
          </div>
        </li>
        {pages &&
          pages.map((page, i, pagesArray) => {
            if (i + 1 === pagesArray.length) {
              // last/active page
              return (
                <li key={page}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div
                      className="ml-4 truncate text-sm font-medium text-gray-700"
                      aria-current="page"
                    >
                      {page
                        .replace(/-/g, ' ')
                        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
                    </div>
                  </div>
                </li>
              );
            }
            // not last/active page
            return (
              <li key={page}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href={`/learn/${course}/${pages[0]}`}
                    className="ml-4 truncate text-sm font-medium text-gray-400 hover:text-gray-700"
                    aria-current={undefined}
                  >
                    {page
                      .replace(/-/g, ' ')
                      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
                  </a>
                </div>
              </li>
            );
          })}
      </ol>
    </nav>
  );
}
