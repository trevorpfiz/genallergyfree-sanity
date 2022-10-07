import { AppShell, Container } from '@mantine/core';

import Alert from '../../alert';
import Meta from '../../meta';
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
        header={<Alert preview={preview} />}
        sx={{ minHeight: '100vh' }}
      >
        <Container size="xl">{children}</Container>
      </AppShell>
    </>
  );
}
