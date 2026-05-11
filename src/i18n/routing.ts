import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  localePrefix: {
    mode: 'as-needed',
  },
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
    '/corbu-beach': '/corbu-beach',
    '/corbu-beach/privacy-policy': '/corbu-beach/privacy-policy',
    '/corbu-beach/terms-of-service': '/corbu-beach/terms-of-service',
    '/corbu-beach/cookie-settings': '/corbu-beach/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];
