import { LinksGroupProps } from './navbar-links-group';

const base: LinksGroupProps = {
  title: 'Releases',
  slug: '/',
  posts: [
    { title: 'Upcoming releases', slug: '/' },
    { title: 'Previous releases', slug: '/' },
    { title: 'Releases schedule', slug: '/' },
  ],
};

export const mockNavbarLinksGroupProps = {
  base,
};
