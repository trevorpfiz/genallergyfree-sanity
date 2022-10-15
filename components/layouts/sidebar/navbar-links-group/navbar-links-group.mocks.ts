import { IconNotes } from '@tabler/icons';
import { LinksGroupProps } from './navbar-links-group';

const base: LinksGroupProps = {
  title: 'Releases',
  slug: '/',
  chapter: '1',
  icon: IconNotes,
  posts: [
    { title: 'Upcoming releases', slug: '/' },
    { title: 'Previous releases', slug: '/' },
    { title: 'Releases schedule', slug: '/' },
  ],
};

export const mockNavbarLinksGroupProps = {
  base,
};
