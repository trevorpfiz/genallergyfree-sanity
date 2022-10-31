import { Box, Burger, Group, Header, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useContext } from 'contexts/context';

import Alert from '../../../navigation/alert';

export default function BurgerHeader({ preview }: { preview: boolean }) {
  const { dispatch, state } = useContext();

  const title = state.opened ? 'Close navigation' : 'Open navigation';

  const matches = useMediaQuery('(min-width: 768px)', true, { getInitialValueInEffect: false });
  const headerHeight = matches ? (preview ? 39 : 0) : preview ? 98 : 59;

  return (
    <Header height={headerHeight} sx={{ borderBottom: 'none' }}>
      <Stack spacing={0} sx={{ height: '100%' }}>
        <Alert preview={preview} />
        {!matches && (
          <Box sx={{ flex: 1 }}>
            <Group align="center" position="apart" px={16} sx={{ height: '100%' }}>
              <Burger
                opened={state.opened}
                onClick={() => dispatch({ type: 'toggle' })}
                title={title}
              />
            </Group>
          </Box>
        )}
      </Stack>
    </Header>
  );
}
