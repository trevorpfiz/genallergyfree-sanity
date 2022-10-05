import { MantineProvider } from '@mantine/core';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { theme } from '../theme';

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
