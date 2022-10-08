import { AppShell, Container } from '@mantine/core';

import Meta from '../../meta';
import BurgerHeader from './burger-header/burger-header';
import NavbarNested from './navbar-nested/navbar-nested';
import { mockNavbarNestedProps } from './navbar-nested/navbar-nested.mocks';

export default function SidebarLayout({
  preview,
  children,
}: {
  preview: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <Meta />
      <AppShell
        padding={0}
        navbar={<NavbarNested {...mockNavbarNestedProps.base} />}
        header={<BurgerHeader preview={preview} />}
        sx={{ minHeight: '100vh' }}
      >
        <Container size="xl">{children}</Container>
      </AppShell>
    </>
  );
}
