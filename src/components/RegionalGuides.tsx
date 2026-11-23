import { useLocale } from 'next-intl';
import { guides } from '@/data/guides';
import { localePath } from '@/lib/seo';

export default function RegionalGuides({exclude}:{exclude?:string}) {
  const locale=useLocale();
  const zh=locale==='zh';
  const items=(guides[locale]||guides.en).filter(g=>g.slug!==exclude);
  const featured=items.slice(0,9);
  return <section id="regional-guides" className="section-padding" style={{background:'var(--bg-tertiary)'}}>
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">{zh?'周边景点与区域指南':'Nearby places and regional guides'}</h2>
          <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
            {zh?'从自然海岸、湖泊到康斯坦察老城的博物馆、考古与历史建筑；每个地点使用独立地图与对应实景照片。':'From natural beaches and lakes to museums, archaeology and historic architecture in Constanța; each destination uses its own map and location-matched photograph.'}
          </p>
        </div>
        <a href={localePath(locale,'/guides')} className="font-medium underline whitespace-nowrap" style={{color:'var(--accent)'}}>
          {zh?`查看全部 ${items.length} 个指南`:`View all ${items.length} guides`} →
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {featured.map(g=><a key={g.slug} href={localePath(locale,`/guides/${g.slug}`)} className="overflow-hidden block rounded-2xl" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
          {g.image && <div className="aspect-[16/9] overflow-hidden"><img src={g.image.url} alt={g.image.alt} loading="lazy" className="w-full h-full object-cover"/></div>}
          <div className="p-6">
            <p className="text-xs uppercase tracking-wide mb-2" style={{color:'var(--accent)'}}>{g.category || (zh?'区域指南':'Regional guide')}</p>
            <h3 className="text-xl font-semibold mb-3">{g.title}</h3>
            <p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>{g.description}</p>
            <p className="mt-5 underline" style={{color:'var(--accent)'}}>{zh?'阅读指南':'Read the guide'} →</p>
          </div>
        </a>)}
      </div>
    </div>
  </section>;
}