import type { Metadata } from 'next';
export const siteUrl = 'https://www.corbubeach.com';
export function localePath(locale: string, path = '') {
  return `${locale === 'en' ? '/en' : ''}${path}` || '/';
}
export function pageMetadata(locale: string, path: string, title: string, description: string): Metadata {
  const canonical = siteUrl + localePath(locale, path);
  return {
    title, description,
    alternates: { canonical, languages: { zh: siteUrl + localePath('zh', path), en: siteUrl + localePath('en', path), 'x-default': siteUrl + localePath('zh', path) } },
    openGraph: { title, description, url: canonical, siteName: 'Corbu Beach Travel Guide', locale: locale === 'zh' ? 'zh_CN' : 'en_US', type: 'website' }
  };
}
