import { IconCalendarStats } from '@tabler/icons';

import { LinksGroupProps } from './navbar-links-group';

const base: LinksGroupProps = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export const mockNavbarLinksGroupProps = {
  base,
};
