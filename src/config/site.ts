export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'PenPowerAI',
  description:
    'Rich-text editor components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
    {
      title: 'Account',
      href: '/account',
    },
  ],
  links: {
    twitter: 'https://twitter.com/zbeyens',
    github: 'https://github.com/udecode/plate',
    docs: 'https://platejs.org',
  },
};
