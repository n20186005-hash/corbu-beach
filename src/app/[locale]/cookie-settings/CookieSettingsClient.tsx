'use client';
import { useLocale, useTranslations } from 'next-intl';
import { localePath } from '@/lib/seo';
export default function CookieSettingsClient() {
  const locale = useLocale();
  const t = useTranslations('cookieSettings');
  return <main className="max-w-3xl mx-auto px-6 py-20 min-h-screen">
    <a className="underline" href={localePath(locale)}>{t('back')}</a>
    <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-6">{t('title')}</h1>
    <p className="leading-loose" style={{color:'var(--text-secondary)'}}>{t('description')}</p>
  </main>;
}
