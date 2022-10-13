import { AppShell, Container } from '@mantine/core';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { courseQuery } from '../../../lib/queries';
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
  const router = useRouter();
  const { course } = router.query;

  const { data, error } = useSWR(courseQuery, (query) =>
    sanityClient.fetch(query, {
      slug: course,
    })
  );

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
        navbar={<NavbarNested linksData={data.sections} />}
        header={<BurgerHeader preview={preview} />}
        sx={{ minHeight: '100vh' }}
      >
        <Container size="xl">{children}</Container>
      </AppShell>
    </>
  );
}
