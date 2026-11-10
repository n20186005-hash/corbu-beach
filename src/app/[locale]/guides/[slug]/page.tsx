import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { guides } from '@/data/guides';
import { pageMetadata, localePath, siteUrl } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegionalGuides from '@/components/RegionalGuides';
export function generateStaticParams() {
 return Object.entries(guides).flatMap(([locale,items]) => items.map(({slug}) => ({locale,slug})));
}
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}) {
 const {locale,slug} = await params;
 const guide = guides[locale]?.find(g=>g.slug===slug);
 return guide ? pageMetadata(locale,`/guides/${slug}`,guide.title+' | Corbu Beach',guide.description) : {robots:{index:false,follow:false}};
}
export default async function GuidePage({params}:{params:Promise<{locale:string;slug:string}>}) {
 const {locale,slug} = await params;
 const guide = guides[locale]?.find(g=>g.slug===slug);
 if (!guide) notFound();
 setRequestLocale(locale);
 const zh = locale==='zh';
 const jsonLd = {'@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,inLanguage:zh?'zh-CN':'en',dateModified:'2026-11-10',author:{'@type':'Organization',name:'Corbu Beach Travel Guide'},mainEntityOfPage:siteUrl+localePath(locale,`/guides/${slug}`)};
 return <><Header/><main className="pt-24">
  <article className="max-w-4xl mx-auto px-6 py-10 guide-content">
   <a href={localePath(locale)}>{zh?'返回海滩指南':'Back to the beach guide'}</a>
   <h1 className="text-3xl sm:text-5xl font-semibold leading-tight mt-8 mb-6">{guide.title}</h1>
   <p className="text-lg">{guide.intro}</p>
   <p className="text-sm" style={{color:'var(--text-muted)'}}>{zh?'编辑：Corbu Beach Travel Guide · 资料核对：2026年11月10日':'Edited by Corbu Beach Travel Guide · Sources checked 10 November 2026'}</p>
   <h2>{zh?'参观重点':'Visit highlights'}</h2><ul>{guide.highlights.map(x=><li key={x}>{x}</li>)}</ul>
   {guide.sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(p=><p key={p}>{p}</p>)}{section.source!==undefined&&<p className="text-sm"><a href={guide.sources[section.source].url} target="_blank" rel="noopener noreferrer">{guide.sources[section.source].label} ↗</a></p>}</section>)}
   <h2>{zh?'地址与地图':'Address and destination map'}</h2><p>{guide.address}</p>
   <p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(guide.mapQuery)}`} target="_blank" rel="noopener noreferrer">{zh?'在 Google Maps 研究目的地':'Research the destination on Google Maps'} ↗</a></p>
   <h2>{zh?'资料与出发前复核':'Sources and pre-visit checks'}</h2><ul>{guide.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul>
   <p>{zh?'以上资料于2026年11月10日核对。请向场馆确认当前开放、票种、临时限制及个人需求。':'Sources checked 10 November 2026. Confirm current opening, ticket categories, temporary restrictions and your own access needs with the venue.'}</p>
  </article>
  <RegionalGuides exclude={slug}/>
 </main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/></>;
}
