import { MantineProvider } from '@mantine/core';
import * as _NextFutureImage from 'next/future/image';
import { ImageProps } from 'next/future/image';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { theme } from '../theme';

const NextFutureImage = require('next/future/image') as typeof _NextFutureImage;

const OriginalNextFutureImage = NextFutureImage.default;

Object.defineProperty(NextFutureImage, 'default', {
  configurable: true,
  value: (props: ImageProps) => {
    const { src, ...restOfProps } = props;
    const fixedSrc: string =
      '/' + (typeof src === 'object' ? ('default' in src ? src.default.src : src.src) : src);
    const blurDataURL: string | undefined = props.src === 'string' ? props.src : undefined;

    return (
      <OriginalNextFutureImage
        {...restOfProps}
        unoptimized
        src={fixedSrc}
        blurDataURL={blurDataURL}
      />
    );
  },
});

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{ ...theme, colorScheme: useDarkMode() ? 'dark' : 'light' }}
      withGlobalStyles
      withNormalizeCSS
    >
      {props.children}
    </MantineProvider>
  );
}

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
