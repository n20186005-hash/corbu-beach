'use client';

import { useLocale, useTranslations } from 'next-intl';
import { localePath } from '@/lib/seo';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const subpage = pathname.replace(/^\/(en|zh)(?=\/|$)/, '') !== '' && pathname.replace(/^\/(en|zh)(?=\/|$)/, '') !== '/';
  const home = localePath(locale);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: (scrolled || subpage) ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: (scrolled || subpage) ? '1px solid var(--border-color)' : 'none',
        backdropFilter: (scrolled || subpage) ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={home} className="font-display text-lg font-semibold tracking-tight" style={{ color: (scrolled || subpage) ? 'var(--text-primary)' : '#fff' }}>
          {t('home')}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {(['gallery', 'reviews', 'map'] as const).map((section) => (
            <a
              key={section}
              href={`${home}#${section}`}
              className="text-sm font-medium transition-colors"
              style={{ color: (scrolled || subpage) ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {t(section)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
