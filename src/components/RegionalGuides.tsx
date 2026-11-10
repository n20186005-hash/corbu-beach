import { useLocale } from 'next-intl';
import { guides } from '@/data/guides';
import { localePath } from '@/lib/seo';
export default function RegionalGuides({exclude}:{exclude?:string}) {
 const locale = useLocale(); const zh=locale==='zh';
 return <section id="regional-guides" className="section-padding" style={{background:'var(--bg-tertiary)'}}><div className="max-w-5xl mx-auto">
 <h2 className="text-3xl font-semibold mb-6">{zh?'区域文化旅行思路':'Regional cultural visits'}</h2>
 <p className="mb-8 leading-relaxed" style={{color:'var(--text-secondary)'}}>{zh?'这些是海滨之外的独立目的地。请按兴趣查看，并自行确认当前交通与入场；这里不提供已核实的 Corbu 出发路线或时间。':'Explore separate cultural destinations beyond the beach. Choose by interest and confirm transport and entry for your date; no Corbu route or journey time has been verified here.'}</p>
 <div className="grid md:grid-cols-3 gap-6">{(guides[locale]||guides.en).filter(g=>g.slug!==exclude).map(g=><a key={g.slug} href={localePath(locale,`/guides/${g.slug}`)} className="block rounded-xl p-6" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}><h3 className="text-xl font-semibold mb-3">{g.title}</h3><p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>{g.description}</p><p className="mt-5 underline" style={{color:'var(--accent)'}}>{zh?'阅读指南':'Read the guide'} →</p></a>)}</div>
 </div></section>;
}
