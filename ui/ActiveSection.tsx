'use client';

import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const activeSectionStyles = cva('block w-full py-3 pl-4 pr-4 font-medium', {
  variants: {
    intent: {
      active: 'text-[#1c7ed6] bg-[#e7f5ff]',
      inactive: 'hover:bg-gray-50',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    intent: 'active',
  },
});

export interface Props extends VariantProps<typeof activeSectionStyles> {
  href: string;
  children: React.ReactNode;
  onClick?: any;
}

export default function ActiveSection({ intent, fullWidth, href, children, onClick }: Props) {
  return (
    <Link href={href} className={activeSectionStyles({ intent, fullWidth })} onClick={onClick}>
      {children}
    </Link>
  );
}
