import { NavbarNestedProps } from './navbar-nested';

const base: NavbarNestedProps = {
  linksData: [
    { title: 'Dashboard', slug: '/' },
    {
      title: 'Market news',
      slug: '/',
      initiallyOpened: true,
      posts: [
        { title: 'Overview', slug: '/' },
        { title: 'Forecasts', slug: '/' },
        { title: 'Outlook', slug: '/' },
        { title: 'Real time', slug: '/' },
      ],
    },
    {
      title: 'Releases',
      slug: '/',
      posts: [
        { title: 'Upcoming releases', slug: '/' },
        { title: 'Previous releases', slug: '/' },
        { title: 'Releases schedule', slug: '/' },
      ],
    },
    { title: 'Analytics', slug: '/' },
    { title: 'Contracts', slug: '/' },
    { title: 'Settings', slug: '/' },
    {
      title: 'Security',
      slug: '/',
      posts: [
        { title: 'Enable 2FA', slug: '/' },
        { title: 'Change password', slug: '/' },
        { title: 'Recovery codes', slug: '/' },
      ],
    },
  ],
};

export const mockNavbarNestedProps = {
  base,
};
