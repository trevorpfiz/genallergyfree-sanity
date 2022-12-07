'use client';

import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const activePostStyles = cva(
  'ml-[30px] block border-l pl-[27px] font-medium text-[13px] py-2 pr-4',
  {
    variants: {
      intent: {
        active: 'border-l-blue-300 text-[#1c7ed6] bg-[#e7f5ff]',
        inactive: 'border-l-gray-200 hover:text-black text-gray-500 hover:bg-gray-50',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'active',
    },
  }
);

export interface Props extends VariantProps<typeof activePostStyles> {
  href: string;
  children: React.ReactNode;
  onClick?: any;
}

export default function ActivePost({ intent, fullWidth, href, children, onClick }: Props) {
  return (
    <Link
      href={href}
      className={activePostStyles({ intent, fullWidth })}
      onClick={onClick || undefined}
    >
      {children}
    </Link>
  );
}
