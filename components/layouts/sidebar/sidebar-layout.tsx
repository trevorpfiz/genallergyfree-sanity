import { AppShell, Container } from '@mantine/core';
import useSWR from 'swr';

import { sectionQuery } from '../../../lib/queries';
import { sanityClient } from '../../../lib/sanity.server';
import Meta from '../../meta';
import BurgerHeader from './burger-header/burger-header';
import NavbarNested from './navbar-nested/navbar-nested';
import NavbarNestedOptimistic from './navbar-nested/navbar-nested-optimistic';

export default function SidebarLayout({
  preview,
  children,
}: {
  preview: boolean;
  children: React.ReactNode;
}) {
  const { data, error } = useSWR(sectionQuery, (query) => sanityClient.fetch(query));

  if (error) return <div>Failed to load</div>;
  if (!data) {
    return (
      <>
        <Meta />
        <AppShell
          padding={0}
          navbar={<NavbarNestedOptimistic />}
          header={<BurgerHeader preview={preview} />}
          sx={{ minHeight: '100vh' }}
        >
          <Container size="xl">{children}</Container>
        </AppShell>
      </>
    );
  }

  return (
    <>
      <Meta />
      <AppShell
        padding={0}
        navbar={<NavbarNested linksData={data} />}
        header={<BurgerHeader preview={preview} />}
        sx={{ minHeight: '100vh' }}
      >
        <Container size="xl">{children}</Container>
      </AppShell>
    </>
  );
}
