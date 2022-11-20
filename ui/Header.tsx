'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

import logo from '#/public/genallergyfree-upscaled-crop.jpg';
import LinkButton from '#/ui/LinkButton';

const headerStyles = cva('', {
  variants: {
    intent: {
      primary: 'bg-oldyellow',
      secondary: 'bg-white',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export type HeaderProps = VariantProps<typeof headerStyles>;

export default function Header({ intent }: HeaderProps) {
  return (
    <header className={headerStyles({ intent })}>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                      <Image
                        src={logo}
                        alt="Generation Allergy Free Logo"
                        style={{ width: '230px', height: 'auto' }}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-6">
                  <Link href="/about" className="font-medium hover:underline">
                    About Us
                  </Link>
                  <LinkButton href="/courses" intent="primary" className="px-4 py-2">
                    Courses
                  </LinkButton>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 bg-oldpink pt-2 pb-3">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Link href="/about">
                  <Disclosure.Button className="block w-full py-2 px-4 text-left text-base font-medium text-black">
                    About Us
                  </Disclosure.Button>
                </Link>
                <Link href="/contact">
                  <Disclosure.Button className="block w-full py-2 px-4 text-left text-base font-medium text-black">
                    Contact
                  </Disclosure.Button>
                </Link>
              </div>
              <div className="border-t border-black bg-oldpink pt-4 pb-3">
                <div className="flex items-center px-4">
                  <Link href="/courses">
                    <Disclosure.Button className="rounded-full bg-oldyellow py-2 px-4 font-semibold text-black hover:bg-yellow-300">
                      Courses
                    </Disclosure.Button>
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}