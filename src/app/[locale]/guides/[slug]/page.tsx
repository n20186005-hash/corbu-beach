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

function FactCard({label,value}:{label:string;value:string}) {
  return <div className="rounded-xl p-5" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
    <p className="text-xs uppercase tracking-wide mb-2" style={{color:'var(--text-muted)'}}>{label}</p>
    <p className="font-medium leading-relaxed">{value}</p>
  </div>;
}

export default async function GuidePage({params}:{params:Promise<{locale:string;slug:string}>}) {
  const {locale,slug} = await params;
  const guide = guides[locale]?.find(g=>g.slug===slug);
  if (!guide) notFound();
  setRequestLocale(locale);
  const zh = locale==='zh';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(guide.mapQuery)}`;
  const checked = zh ? '2026年11月23日' : '23 November 2026';
  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'Article',
    headline:guide.title,
    description:guide.description,
    inLanguage:zh?'zh-CN':'en',
    dateModified:'2026-11-23',
    author:{'@type':'Organization',name:'Corbu Beach Travel Guide'},
    mainEntityOfPage:siteUrl+localePath(locale,`/guides/${slug}`),
    ...(guide.image ? {image:guide.image.url} : {})
  };

  return <><Header/><main className="pt-24">
    <article className="max-w-5xl mx-auto px-6 py-10 guide-content">
      <a href={localePath(locale)} className="inline-flex items-center gap-2 underline" style={{color:'var(--accent)'}}>
        ← {zh?'返回 Corbu Beach 指南':'Back to the Corbu Beach guide'}
      </a>

      <div className="mt-8 mb-8">
        <p className="text-sm uppercase tracking-widest mb-3" style={{color:'var(--accent)'}}>
          {guide.category || (zh?'周边独立景点':'Independent regional visit')}
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold leading-tight mb-5">{guide.title}</h1>
        <p className="text-lg sm:text-xl leading-relaxed" style={{color:'var(--text-secondary)'}}>{guide.intro}</p>
        <p className="text-sm mt-4" style={{color:'var(--text-muted)'}}>
          {zh?`编辑：Corbu Beach Travel Guide · 资料核对：${checked}`:`Edited by Corbu Beach Travel Guide · Sources checked ${checked}`}
        </p>
      </div>

      {guide.image && <figure className="mb-12">
        <div className="overflow-hidden rounded-2xl" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
          <img src={guide.image.url} alt={guide.image.alt} className="w-full h-auto object-cover" loading="eager" />
        </div>
        <figcaption className="text-xs mt-2" style={{color:'var(--text-muted)'}}>
          {zh?'实景照片来源：':'Photo source: '}
          <a href={guide.image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{guide.image.credit} ↗</a>
        </figcaption>
      </figure>}

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{zh?'游览重点':'Visit highlights'}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {guide.highlights.map(x=><div key={x} className="rounded-xl p-5" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
            <p className="leading-relaxed">{x}</p>
          </div>)}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{zh?'基本信息':'Basic information'}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <FactCard label={zh?'类型':'Type'} value={guide.category || (zh?'区域景点':'Regional attraction')} />
          <FactCard label={zh?'地址／所在区域':'Address / area'} value={guide.address} />
          {guide.management && <FactCard label={zh?'管理主体／使用性质':'Management / site use'} value={guide.management} />}
          {guide.hours && <FactCard label={zh?'开放信息':'Opening information'} value={guide.hours} />}
          {guide.tickets && <FactCard label={zh?'门票／费用':'Tickets / fees'} value={guide.tickets} />}
          {guide.rating ? <FactCard
            label={zh?'Google Maps 评分快照':'Google Maps rating snapshot'}
            value={`${guide.rating}/5 · ${guide.reviewCount || (zh?'评价数未保存':'review count not stored')} · ${guide.ratingChecked || checked}`}
          /> : <FactCard
            label={zh?'Google Maps 评分':'Google Maps rating'}
            value={zh?'本页未保存可靠评分快照；请打开地图查看实时评分与评价。':'No reliable rating snapshot is stored on this page; open Maps for the live rating and reviews.'}
          />}
        </div>
      </section>

      {guide.transport && <section className="mb-12 rounded-2xl p-6 sm:p-8" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{zh?'交通与抵达':'Getting there'}</h2>
        <p className="leading-relaxed">{guide.transport}</p>
        <p className="mt-5"><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>
          {zh?'打开该景点专属 Google Maps 搜索':'Open this destination in Google Maps'} ↗
        </a></p>
      </section>}

      {guide.sections.map(section=><section key={section.title} className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{section.title}</h2>
        {section.paragraphs.map(p=><p key={p} className="leading-relaxed mb-4">{p}</p>)}
        {section.source!==undefined && guide.sources[section.source] && <p className="text-sm">
          <a href={guide.sources[section.source].url} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>
            {guide.sources[section.source].label} ↗
          </a>
        </p>}
      </section>)}

      {guide.visitorNotes?.length ? <section className="mb-12 rounded-2xl p-6 sm:p-8" style={{background:'var(--bg-secondary)',border:'1px solid var(--border-color)'}}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{zh?'游客须知':'Visitor notes'}</h2>
        <ul className="space-y-3">{guide.visitorNotes.map(note=><li key={note}>{note}</li>)}</ul>
      </section> : null}

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{zh?'游客评价':'Visitor reviews'}</h2>
        {guide.rating ? <p className="leading-relaxed">
          {zh
            ? `Google Maps 快照：${guide.rating}/5（${guide.reviewCount || '评价数未保存'}），核对日期 ${guide.ratingChecked || checked}。评分来自第三方地图平台，本网站不复制个人评论。`
            : `Google Maps snapshot: ${guide.rating}/5 (${guide.reviewCount || 'review count not stored'}), checked ${guide.ratingChecked || checked}. The rating is a third-party map snapshot; this site does not reproduce individual reviews.`}
        </p> : <p className="leading-relaxed">
          {zh?'未保存可靠的 Google Maps 评分数据，以避免补写或猜测；可通过下方地图查看当前公开评价。':'No reliable Google Maps rating is stored here, avoiding guessed or fabricated data. Use the map link below for current public reviews.'}
        </p>}
        <p className="mt-4"><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>
          {zh?'查看当前 Google Maps 信息与评价':'View current Google Maps information and reviews'} ↗
        </a></p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{zh?'地址与地图':'Address and destination map'}</h2>
        <p>{guide.address}</p>
        <p className="mt-4"><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>
          {zh?'在 Google Maps 打开该景点':'Open this destination on Google Maps'} ↗
        </a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{zh?'资料来源与出发前复核':'Sources and pre-visit checks'}</h2>
        <ul>{guide.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul>
        <p className="mt-5">
          {zh?`资料于${checked}核对。开放、票种、保护规定、宗教活动与临时限制可能变化，出发前应向对应管理方复核。`:`Sources checked ${checked}. Opening, tickets, protected-area rules, religious use and temporary restrictions can change; recheck with the responsible site before departure.`}
        </p>
      </section>
    </article>
    <RegionalGuides exclude={slug}/>
  </main><Footer/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/>
  </>;
}
