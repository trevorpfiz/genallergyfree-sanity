import { IconNotes } from '@tabler/icons';
import { NavbarNestedProps } from './navbar-nested';

const base: NavbarNestedProps = {
  linksData: [
    { title: 'Dashboard', slug: '/', chapter: '1', icon: IconNotes },
    {
      title: 'Market news',
      slug: '/',
      chapter: '1',
      icon: IconNotes,
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
      chapter: '1',
      icon: IconNotes,
      posts: [
        { title: 'Upcoming releases', slug: '/' },
        { title: 'Previous releases', slug: '/' },
        { title: 'Releases schedule', slug: '/' },
      ],
    },
    { title: 'Analytics', slug: '/', chapter: '1', icon: IconNotes },
    { title: 'Contracts', slug: '/', chapter: '1', icon: IconNotes },
    { title: 'Settings', slug: '/', chapter: '1', icon: IconNotes },
    {
      title: 'Security',
      slug: '/',
      chapter: '1',
      icon: IconNotes,
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
