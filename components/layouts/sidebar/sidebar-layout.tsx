import { AppShell, Container, Header } from '@mantine/core';

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
        header={
          <Header height={preview ? 39 : 0}>
            <Alert preview={preview} />
          </Header>
        }
        sx={{ minHeight: '100vh' }}
      >
        <Container size="xl">{children}</Container>
      </AppShell>
    </>
  );
}
