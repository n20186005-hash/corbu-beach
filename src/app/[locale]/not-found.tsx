import {getLocale} from 'next-intl/server';
import {localePath} from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {title:'Page not found | Corbu Beach',robots:{index:false,follow:false}};

export default async function NotFound() {
  const locale=await getLocale();
  const zh=locale==='zh';
  return <><Header/><main className="max-w-4xl min-h-[60vh] mx-auto px-6 pt-40 pb-24">
    <p className="text-sm uppercase tracking-widest mb-4" style={{color:'var(--accent)'}}>404</p>
    <h1 className="text-4xl sm:text-5xl font-semibold mb-6">{zh?'页面不存在':'Page not found'}</h1>
    <p className="text-lg leading-relaxed mb-8" style={{color:'var(--text-secondary)'}}>
      {zh?'该页面可能已经移动，或链接地址有误。你仍可以返回海滩指南或查看周边景点。':'This page may have moved or the link may be incorrect. You can return to the beach guide or explore nearby destinations.'}
    </p>
    <div className="flex flex-wrap items-center gap-4">
      <a href={localePath(locale)} className="px-5 py-3 rounded-full font-medium" style={{background:'var(--accent)',color:'#fff'}}>{zh?'返回首页':'Back to homepage'}</a>
      <a href={localePath(locale,'/guides')} className="px-5 py-3 rounded-full font-medium" style={{border:'1px solid var(--border-color)',color:'var(--text-primary)'}}>{zh?'周边景点':'Nearby attractions'}</a>
    </div>
  </main><Footer/></>;
}
