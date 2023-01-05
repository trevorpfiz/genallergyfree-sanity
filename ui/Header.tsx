'use client';

import { Popover, Transition } from '@headlessui/react';
import {
  AtSymbolIcon,
  BanknotesIcon,
  Bars3Icon,
  IdentificationIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { Fragment } from 'react';

import logoBlack from '#/public/genallergyfree-black.png';

import Image from 'next/image';
import LinkButton from './LinkButton';

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Donate', href: '/donate' },
];

const navigationMobile = [
  { name: 'About Us', href: '/about', icon: IdentificationIcon },
  { name: 'Contact', href: '/contact', icon: AtSymbolIcon },
  { name: 'Donate', href: '/donate', icon: BanknotesIcon },
];

const headerStyles = cva('', {
  variants: {
    intent: {
      primary: 'bg-oldyellow relative',
      secondary: 'bg-white relative',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export type HeaderProps = VariantProps<typeof headerStyles>;

export default function HeaderNew({ intent }: HeaderProps) {
  return (
    <Popover as="header" className={headerStyles({ intent })}>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="/">
              <span className="sr-only">Generation Allergy Free</span>
              <Image
                src={logoBlack}
                alt="Generation Allergy Free Logo"
                style={{ width: '230px', height: 'auto' }}
                priority
              />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="font-medium hover:underline">
              {item.name}
            </Link>
          ))}
          <LinkButton href="/courses" intent="primary" className="px-4 py-2">
            Courses
          </LinkButton>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden">
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <Popover.Button as={Link} href="/">
                  <Image
                    src={logoBlack}
                    alt="Generation Allergy Free Logo"
                    style={{ width: '200px', height: 'auto' }}
                    priority
                  />
                </Popover.Button>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-3 pb-6">
              <div className="space-y-1 px-2">
                {navigationMobile.map((item) => (
                  <Popover.Button
                    as={Link}
                    key={item.name}
                    href={item.href}
                    className="flex items-start rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    <item.icon className="h-6 w-6 flex-shrink-0 text-pink-500" aria-hidden="true" />
                    <p className="ml-3">{item.name}</p>
                  </Popover.Button>
                ))}
              </div>
              <div className="mt-6 px-5">
                <Popover.Button
                  as={Link}
                  href="/courses"
                  className="block w-full rounded-md bg-gradient-to-r from-pink-500 to-pink-600 py-3 px-4 text-center font-medium text-white shadow hover:from-pink-600 hover:to-pink-700"
                >
                  Courses
                </Popover.Button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
