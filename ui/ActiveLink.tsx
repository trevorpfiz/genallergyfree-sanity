'use client';

import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const activeLinkStyles = cva('ml-[30px] block border-l pl-[27px] font-medium text-[13px]', {
  variants: {
    intent: {
      active: 'border-l-red-700 text-red-600',
      inactive: 'border-l-gray-900',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    intent: 'active',
  },
});

export interface Props extends VariantProps<typeof activeLinkStyles> {
  href: string;
  children: React.ReactNode;
}

export default function ActiveLink({ intent, fullWidth, href, children }: Props) {
  return (
    <Link href={href} className={activeLinkStyles({ intent, fullWidth })}>
      {children}
    </Link>
  );
}
