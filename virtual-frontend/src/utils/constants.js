export const API_BASE = 'http://localhost:5000';

export const ROUTES = {
  home:      '/',
  team:      '/team',
  member:    (id) => `/member/${id}`,
  portfolio: (id) => `/member/${id}/portfolio`,
  notFound:  '*',
};

export const SOCIAL_ICONS = {
  linkedin:  'LinkedIn',
  github:    'GitHub',
  twitter:   'Twitter / X',
  instagram: 'Instagram',
  portfolio: 'Portfolio',
};

export const BREAKPOINTS = {
  mobile:  768,
  tablet:  1024,
  desktop: 1440,
};
