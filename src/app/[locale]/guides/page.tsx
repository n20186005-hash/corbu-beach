import { setRequestLocale } from 'next-intl/server';
import { guides } from '@/data/guides';
import { pageMetadata, localePath } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata({params}:{params:Promise<{locale:string}>}) {
  const {locale}=await params;
  const zh=locale==='zh';
  return pageMetadata(
    locale,
    '/guides',
    zh?'Corbu Beach 周边景点与区域指南 | 34+ 独立目的地':'Nearby Corbu Beach: 34+ independent places and regional guides',
    zh?'从 Corbu、Vadu、Năvodari、Mamaia 到 Constanța 老城，查看独立景点的实景照片、地图、基础信息、交通、管理主体与行前核对。':'Explore independent destinations from Corbu and Vadu to Năvodari, Mamaia and historic Constanța, with real-location photos, maps, practical information and pre-visit checks.'
  );
}

export default async function GuidesIndex({params}:{params:Promise<{locale:string}>}) {
  const {locale}=await params;
  setRequestLocale(locale);
  const zh=locale==='zh';
  const items=guides[locale]||guides.en;
  return <><Header/><main className="pt-24">
    <section className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-sm uppercase tracking-widest mb-3" style={{color:'var(--accent)'}}>{zh?'Corbu Beach 周边探索':'Explore around Corbu Beach'}</p>
      <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-5">{zh?'周边景点与区域指南':'Nearby places and regional guides'}</h1>
      <p className="max-w-3xl text-lg leading-relaxed mb-4" style={{color:'var(--text-secondary)'}}>
        {zh?'这里收录真正独立的海滩、湖泊、博物馆、考古遗址、宗教建筑、历史住宅与海滨空间。每个详情页分别核对地点、地图和实景照片；多语言版本不重复计入景点数量。':'This directory covers genuinely separate beaches, lakes, museums, archaeological sites, places of worship, historic houses and waterfront spaces. Each detail page uses its own destination map and location-matched photograph; translated routes are not counted as additional attractions.'}
      </p>
      <p className="text-sm mb-10" style={{color:'var(--text-muted)'}}>
        {zh?`当前共 ${items.length} 个独立指南，其中 34 个为本轮新增景点；资料核对日期：2026年11月23日。`:`There are ${items.length} independent guides, including 34 attractions added in this expansion. Sources checked 23 November 2026.`}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(guide=><a key={guide.slug} href={localePath(locale,`/guides/${guide.slug}`)} className="group overflow-hidden rounded-2xl block" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
          {guide.image ? <div className="aspect-[16/10] overflow-hidden" style={{background:'var(--bg-tertiary)'}}>
            <img src={guide.image.url} alt={guide.image.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"/>
          </div> : <div className="aspect-[16/10] flex items-center justify-center px-6 text-center" style={{background:'var(--bg-tertiary)',color:'var(--text-muted)'}}>
            {zh?'区域文化指南':'Regional cultural guide'}
          </div>}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wide mb-2" style={{color:'var(--accent)'}}>{guide.category || (zh?'区域指南':'Regional guide')}</p>
            <h2 className="text-xl font-semibold mb-3 leading-snug">{guide.title}</h2>
            <p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>{guide.description}</p>
            <p className="mt-5 font-medium" style={{color:'var(--accent)'}}>{zh?'查看完整指南':'Open full guide'} →</p>
          </div>
        </a>)}
      </div>
    </section>
  </main><Footer/></>;
}
