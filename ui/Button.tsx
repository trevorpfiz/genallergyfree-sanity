import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary: 'bg-pink-400 text-white hover:bg-pink-500',
        secondary:
          'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
        danger: 'bg-red-500 text-white focus:ring-red-500',
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

type ButtonProps = ComponentProps<'button'>;

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export default function Button({ intent, fullWidth, ...props }: Props) {
  return <button type="button" className={buttonStyles({ intent, fullWidth })} {...props} />;
}
