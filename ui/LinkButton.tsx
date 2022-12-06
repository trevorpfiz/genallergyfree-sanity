import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const linkButtonStyles = cva(
  'flex items-center justify-center rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-white focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary: 'bg-pink-400 text-white hover:bg-pink-500',
        primaryInverse: 'bg-pink-50 text-pink-500 hover:bg-pink-100',
        secondary: 'bg-blue-400 text-white hover:bg-blue-500',
        tertiary: 'bg-green-400 text-white hover:bg-green-500',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export interface LinkButtonProps extends VariantProps<typeof linkButtonStyles> {
  href: string;
  children: React.ReactNode;
  className: string;
}

export type LinkButtonIntent = LinkButtonProps['intent'];

export default function LinkButton({
  href,
  intent,
  fullWidth,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={linkButtonStyles({ intent, fullWidth, className })} {...props} />
  );
}
