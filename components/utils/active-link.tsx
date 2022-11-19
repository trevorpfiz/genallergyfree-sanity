'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  slug: string;
  children: React.ReactNode;
  activeClassName: string;
  defaultClassName: string;
}

export default function ActiveLink({
  href,
  slug,
  children,
  activeClassName,
  defaultClassName,
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname?.endsWith(slug);

  return (
    <Link href={href} className={isActive ? activeClassName : defaultClassName}>
      {children}
    </Link>
  );
}
