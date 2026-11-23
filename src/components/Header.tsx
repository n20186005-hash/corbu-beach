'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';
import {localePath} from '@/lib/seo';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const t=useTranslations('header');
  const locale=useLocale();
  const pathname=usePathname();
  const [scrolled,setScrolled]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  const home=localePath(locale);
  const path=pathname.replace(/^\/(en|zh)(?=\/|$)/,'') || '/';
  const subpage=path !== '/';
  const solid=scrolled || subpage || mobileOpen;
  const nearPath=localePath(locale,'/guides');
  const nav=[
    {key:'nearby',label:t('nearby'),href:nearPath,active:path==='/guides'||path.startsWith('/guides/')},
    {key:'gallery',label:t('gallery'),href:home+'#gallery',active:false},
    {key:'reviews',label:t('reviews'),href:home+'#reviews',active:false},
    {key:'map',label:t('map'),href:home+'#map',active:false}
  ];

  useEffect(()=>{
    const handler=()=>setScrolled(window.scrollY>50);
    handler();
    window.addEventListener('scroll',handler,{passive:true});
    return ()=>window.removeEventListener('scroll',handler);
  },[]);
  useEffect(()=>{setMobileOpen(false);},[pathname]);

  return <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    style={{
      background:solid?'var(--bg-secondary)':'transparent',
      borderBottom:solid?'1px solid var(--border-color)':'1px solid transparent',
      backdropFilter:solid?'blur(12px)':'none'
    }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
      <a href={home} className="font-display text-lg sm:text-xl font-semibold tracking-tight truncate whitespace-nowrap"
        style={{color:solid?'var(--text-primary)':'#fff'}}>{t('home')}</a>
      <nav aria-label={t('navigation')} className="hidden lg:flex items-center justify-center gap-1 min-w-0">
        {nav.map(item=><a key={item.key} href={item.href} aria-current={item.active?'page':undefined}
          className="h-10 px-3 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors hover:underline"
          style={{color:solid?(item.active?'var(--accent)':'var(--text-secondary)'):'rgba(255,255,255,0.92)',background:item.active&&solid?'var(--bg-tertiary)':'transparent'}}>
          {item.label}
        </a>)}
      </nav>
      <div className="flex items-center justify-end gap-2 min-w-0">
        <ThemeToggle/>
        <LanguageToggle/>
        <button type="button" onClick={()=>setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen?t('closeMenu'):t('openMenu')}
          aria-expanded={mobileOpen} aria-controls="corbu-mobile-navigation"
          className="lg:hidden w-10 h-10 rounded-lg inline-flex items-center justify-center flex-shrink-0"
          style={{background:'var(--tag-bg)',color:'var(--tag-text)'}}>
          {mobileOpen
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>}
        </button>
      </div>
    </div>
    {mobileOpen && <nav id="corbu-mobile-navigation" aria-label={t('navigation')}
      className="lg:hidden px-4 sm:px-6 pb-4 pt-2 border-t"
      style={{background:'var(--bg-secondary)',borderColor:'var(--border-color)'}}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2">
        {nav.map(item=><a key={item.key} href={item.href} onClick={()=>setMobileOpen(false)}
          aria-current={item.active?'page':undefined}
          className="min-h-12 rounded-xl flex items-center justify-center px-3 text-sm font-medium text-center"
          style={{color:item.active?'var(--accent)':'var(--text-primary)',background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
          {item.label}
        </a>)}
      </div>
    </nav>}
  </header>;
}
