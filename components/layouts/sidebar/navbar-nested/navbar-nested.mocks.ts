import { NavbarNestedProps } from './navbar-nested';

const base: NavbarNestedProps = {
  linksData: [
    { title: 'Dashboard' },
    {
      title: 'Market news',
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
      posts: [
        { title: 'Upcoming releases', slug: '/' },
        { title: 'Previous releases', slug: '/' },
        { title: 'Releases schedule', slug: '/' },
      ],
    },
    { title: 'Analytics' },
    { title: 'Contracts' },
    { title: 'Settings' },
    {
      title: 'Security',
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
