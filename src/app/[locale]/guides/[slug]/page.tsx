import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { guides } from '@/data/guides';
import { pageMetadata, localePath, siteUrl } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegionalGuides from '@/components/RegionalGuides';

export function generateStaticParams() {
  return Object.entries(guides).flatMap(([locale, items]) => items.map(({slug}) => ({locale, slug})));
}

export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}) {
  const {locale, slug} = await params;
  const guide = guides[locale]?.find(g => g.slug === slug);
  return guide ? pageMetadata(locale, '/guides/' + slug, guide.title + ' | Corbu Beach', guide.description) : {robots:{index:false,follow:false}};
}

function FactCard({label, value}:{label:string;value:string}) {
  return <div className="rounded-2xl p-5" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
    <p className="text-xs uppercase tracking-[0.16em] mb-2" style={{color:'var(--text-muted)'}}>{label}</p>
    <p className="font-medium leading-relaxed">{value}</p>
  </div>;
}

function SectionHeading({eyebrow, title, description}:{eyebrow?:string;title:string;description?:string}) {
  return <div className="mb-8">
    {eyebrow && <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{color:'var(--accent)'}}>{eyebrow}</p>}
    <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-3">{title}</h2>
    {description && <p className="max-w-3xl leading-relaxed" style={{color:'var(--text-secondary)'}}>{description}</p>}
  </div>;
}

function getStayCards(slug:string, address:string, zh:boolean) {
  const inMamaia = /mamaia/i.test(slug + ' ' + address);
  const inCorbuVadu = /vadu|corbu/i.test(slug + ' ' + address);
  const inOvidiuNavodari = /ovidiu|tasaul|năvodari|navodari/i.test(slug + ' ' + address);

  if (inCorbuVadu) return zh ? [
    {title:'靠近自然海岸：Corbu / Vadu 村落周边',tag:'减少海滩往返',desc:'适合把野生海岸作为行程核心的游客。预订前应向住宿方确认实际道路、停车、饮水、餐饮及是否能协助说明当前保护区进入条件。'},
    {title:'服务更完整：Năvodari',tag:'餐饮与补给更方便',desc:'适合希望白天前往自然海岸、晚上回到商业与餐饮更完整区域的游客。应单独核对每天往返路线与最后一段海岸通行条件。'},
    {title:'度假设施优先：Mamaia / Mamaia Nord',tag:'海滨住宿选择较多',desc:'适合把 Corbu 或 Vadu 作为半日/一日自然行程，同时希望享受度假区餐饮与海滨设施的游客。旺季交通和停车应预留余量。'},
    {title:'城市文化组合：Constanța',tag:'适合博物馆与老城',desc:'如果行程还包括赌场、奥维德广场、博物馆和宗教建筑，住在康斯坦察更利于安排城市参观，再把自然海岸作为独立出游日。'}
  ] : [
    {title:'Closest to the wild coast: Corbu / Vadu village area',tag:'Less backtracking to the beach',desc:'Best when the protected coast is the main purpose of the trip. Before booking, ask the host about the actual road, parking, water, food and any current access guidance they can provide.'},
    {title:'More everyday services: Năvodari',tag:'Easier food and supplies',desc:'Useful for visitors who want to spend the day on the natural coast but return to a more serviced town. Recheck the day’s route and the final permitted coastal approach separately.'},
    {title:'Resort convenience: Mamaia / Mamaia Nord',tag:'Broader seaside accommodation choice',desc:'A practical base if Corbu or Vadu is a half-day or day trip and you prefer resort dining and facilities. Allow for peak-season traffic and parking.'},
    {title:'Culture plus coast: Constanța',tag:'Best for museums and the old town',desc:'Choose Constanța if the itinerary also includes the Casino, Ovid Square, museums and religious heritage, then treat the wild coast as a separate excursion day.'}
  ];

  if (inMamaia) return zh ? [
    {title:'海滩优先：Mamaia 海滨',tag:'步行到沙滩与度假设施',desc:'适合以海滩、缆车、水上乐园或度假区散步为主的行程。选择住宿时先确认离自己要去的海滩区段和具体入口有多远。'},
    {title:'安静一些：Mamaia Nord / Năvodari',tag:'适合较长海滨停留',desc:'适合希望远离核心度假区最繁忙区段、同时保留海边住宿体验的游客。前往老城或南部景点时需要另算交通。'},
    {title:'城市观光优先：Constanța 中心',tag:'老城与博物馆更方便',desc:'如果 Mamaia 只是一天中的一部分，而重点还包括历史半岛、赌场和博物馆，住在市中心通常更容易组织城市步行。'},
    {title:'预订提示',tag:'价格随季节波动明显',desc:'夏季、周末和活动期需求上升较快。预订前确认停车、早餐、海滩距离、取消政策及淡季是否正常营业。'}
  ] : [
    {title:'Beach first: Mamaia seafront',tag:'Walkable to sand and resort facilities',desc:'Best when the beach, cable car, water park or resort promenade is the main focus. Check the exact beach sector and entrance rather than judging distance from a generic Mamaia address.'},
    {title:'Quieter base: Mamaia Nord / Năvodari',tag:'Good for a longer seaside stay',desc:'Useful if you prefer a less central resort base while keeping a coastal setting. Trips to the old town and southern city attractions need separate transport planning.'},
    {title:'City sightseeing first: central Constanța',tag:'Easier for the old town and museums',desc:'If Mamaia is only one part of the day and the historic peninsula, Casino and museums matter more, a central city base can simplify walking and urban transport.'},
    {title:'Booking note',tag:'Strong seasonal price variation',desc:'Demand rises in summer, weekends and event periods. Confirm parking, breakfast, beach distance, cancellation terms and whether the property operates normally outside peak season.'}
  ];

  if (inOvidiuNavodari) return zh ? [
    {title:'就近住宿：Ovidiu / Năvodari',tag:'减少区域景点往返',desc:'适合把湖泊、Ovidiu 考古点或北部海岸作为重点的游客。预订前确认住宿到实际公共入口的路线，而不是只看直线距离。'},
    {title:'海滨度假：Mamaia / Mamaia Nord',tag:'兼顾湖泊与海滩',desc:'适合希望白天探索湖泊、考古或 Năvodari 一带，晚上回到海滨度假区的游客。'},
    {title:'城市文化：Constanța',tag:'适合加入老城行程',desc:'如果还计划参观博物馆、赌场、宗教建筑与历史住宅，住在康斯坦察可减少城市景点之间的移动。'},
    {title:'预订提示',tag:'核对停车与道路',desc:'湖区和考古点的最后一段路况不一定与住宿平台显示一致，应向住宿方确认停车和雨后道路情况。'}
  ] : [
    {title:'Stay nearby: Ovidiu / Năvodari',tag:'Less regional backtracking',desc:'Good when the lakes, Ovidiu archaeology or northern coast are the priority. Confirm the real public-access route from the property rather than relying on straight-line distance.'},
    {title:'Seaside base: Mamaia / Mamaia Nord',tag:'Combine lake and beach time',desc:'Useful if you want to explore lakes, archaeology or Năvodari by day and return to a resort environment in the evening.'},
    {title:'Culture base: Constanța',tag:'Best for adding the old town',desc:'Choose the city if the itinerary also includes museums, the Casino, religious buildings and historic houses; this reduces movement between urban sights.'},
    {title:'Booking note',tag:'Check parking and road conditions',desc:'The final road to lake and archaeology viewpoints may differ from accommodation-platform assumptions. Ask about parking and wet-weather road conditions.'}
  ];

  return zh ? [
    {title:'老城步行优先：历史半岛 / Piața Ovidiu 周边',tag:'适合密集文化景点',desc:'适合把奥维德广场、赌场、教堂、清真寺、历史住宅和海滨作为重点的游客。许多景点可步行串联，但停车条件应单独确认。'},
    {title:'交通与生活便利：Constanța 市中心',tag:'餐饮与公共交通更均衡',desc:'适合想兼顾博物馆、购物、餐饮与不同城区景点的游客。选择靠近主要公共交通或步行轴线的位置通常比只追求海景更实用。'},
    {title:'海滨度假组合：Mamaia',tag:'白天城市、晚上度假区',desc:'适合把历史文化景点作为白天行程、住宿更偏好海滨度假氛围的游客，但每天进入老城要预留交通时间。'},
    {title:'预订提示',tag:'先看步行与停车条件',desc:'历史城区街道较紧凑。自驾游客应先确认住宿停车和进出规则；步行游客则应优先考虑与计划景点之间的实际步行路线。'}
  ] : [
    {title:'Old-town walking base: historic peninsula / Piața Ovidiu',tag:'Best for dense heritage sightseeing',desc:'Ideal for Ovid Square, the Casino, churches, mosques, historic houses and the seafront. Many sights can be linked on foot, but parking should be checked independently.'},
    {title:'Balanced city base: central Constanța',tag:'Food and public transport nearby',desc:'A practical choice for mixing museums, dining, shopping and different city districts. Proximity to a useful walking or transit corridor can matter more than a sea view.'},
    {title:'Resort combination: Mamaia',tag:'City by day, resort by evening',desc:'Works if cultural sightseeing is mainly a daytime activity and you prefer a seaside-resort atmosphere at night, but allow time for each trip into the historic centre.'},
    {title:'Booking note',tag:'Check walking and parking before paying',desc:'Historic streets are compact. Drivers should confirm parking and access rules; walkers should compare the real walking route to the attractions they plan to visit.'}
  ];
}

export default async function GuidePage({params}:{params:Promise<{locale:string;slug:string}>}) {
  const {locale, slug} = await params;
  const guide = guides[locale]?.find(g => g.slug === slug);
  if (!guide) notFound();
  setRequestLocale(locale);

  const zh = locale === 'zh';
  const checked = zh ? '2026年11月23日' : '23 November 2026';
  const mapQuery = [guide.mapQuery, guide.address].filter(Boolean).join(' ');
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapQuery);
  const identity = guide.sections[0]?.paragraphs?.[0] || guide.intro;
  const observation = guide.sections[1]?.paragraphs?.[0] || guide.highlights[0] || guide.intro;
  const planning = guide.sections[2]?.paragraphs?.[0] || guide.transport || guide.intro;

  const visitTips = [guide.hours, guide.tickets, guide.transport, guide.visitorNotes?.[0]].filter(Boolean) as string[];

  const storySections = guide.sections.length >= 4 ? guide.sections.slice(0,4) : [
    {
      title: zh ? '历史与地点背景' : 'History and place context',
      paragraphs:[
        identity,
        zh
          ? '理解这里时，不应只看单一地标本身；' + guide.title + ' 与 ' + guide.address + ' 的城市、海岸或社区环境共同构成参观背景。' + (guide.management ? ' 当前使用与保护方式也与其管理主体直接相关：' + guide.management : '')
          : 'This place is best understood in its wider setting rather than as an isolated marker. ' + guide.title + ' is shaped by the urban, coastal or community context around ' + guide.address + '.' + (guide.management ? ' Its present use and conservation are also tied to the responsible site context: ' + guide.management : '')
      ]
    },
    {
      title: zh ? '建筑／景观特色' : 'Architecture / landscape features',
      paragraphs:[
        observation,
        zh
          ? '现场观察时可把“整体轮廓—主要结构—细节材料—周边环境”作为顺序，并重点对照这三项特征：' + guide.highlights.join('；')
          : 'A useful viewing sequence is overall form, main structure, material/detail, then setting. Compare these specific characteristics on site: ' + guide.highlights.join('; ')
      ]
    },
    {
      title: zh ? '文化与游览意义' : 'Cultural significance',
      paragraphs:[
        guide.management || (zh ? '该地点的使用与保护方式应以当前管理方和现场规则为准。' : 'Use and conservation should follow the current responsible authority and on-site rules.'),
        zh
          ? '对游客而言，它的价值不只是“看一眼”的打卡点，而是帮助理解康斯坦察及北部海岸在自然、港口、宗教、考古或度假文化上的不同层次。参观时应把现场仍在使用的功能与历史遗产区分开来。'
          : 'For visitors, its value goes beyond a quick photo stop: it helps explain a specific layer of Constanța and the northern coast, whether natural, maritime, religious, archaeological or resort-related. Current everyday use should be distinguished from historic interpretation.'
      ]
    },
    {
      title: zh ? '核心体验' : 'Core experience',
      paragraphs:[
        planning,
        zh
          ? '最有效的参观方式是先确认开放与进入条件，再用本页的专属地图抵达正确位置；现场先建立方向感，随后观察最具辨识度的结构或景观，最后再决定是否加入周边景点。'
          : 'The most useful visit starts by confirming opening and access, then navigating to the exact destination with this page’s map link. Establish orientation first, focus on the site’s most distinctive structure or landscape, and only then decide whether to add nearby stops.'
      ]
    }
  ];

  const stayCards = getStayCards(slug, guide.address, zh);

  const routeSteps = [
    zh ? '出发前先确认：' + (guide.hours || '查看当天开放与现场限制。') : 'Before leaving, confirm: ' + (guide.hours || 'check same-day opening and site restrictions.'),
    zh ? '导航到正确地点：' + (guide.transport || ('使用 ' + guide.title + ' 的专属地图搜索。')) : 'Navigate to the correct destination: ' + (guide.transport || ('use the dedicated map search for ' + guide.title + '.')),
    zh ? '抵达后先建立方向感：确认入口、公共通道、禁止进入区域及返程方向。' : 'On arrival, establish orientation: identify the entrance, public route, restricted areas and return direction.',
    zh ? '先看整体：' + (guide.highlights[0] || identity) : 'Read the overall setting first: ' + (guide.highlights[0] || identity),
    zh ? '再看主要特征：' + (guide.highlights[1] || observation) : 'Then focus on the principal feature: ' + (guide.highlights[1] || observation),
    zh ? '最后看细节：' + (guide.highlights[2] || observation) : 'Finish with the details: ' + (guide.highlights[2] || observation),
    zh ? '选择一个不干扰通行、礼拜、保护或运营的位置完成全景与细节摄影。' : 'Choose a lawful position that does not obstruct circulation, worship, conservation or operations for overview and detail photographs.',
    zh ? '结束前复核返程、天气和现场规则；若继续前往周边景点，再单独打开下一地点的地图。' : 'Before leaving, recheck the return plan, weather and site rules. If continuing to another attraction, open that destination’s map separately.'
  ];

  const photoSpots = [
    {
      name: zh ? guide.title + ' 全景' : guide.title + ' overview',
      desc: zh ? '先用较宽视角记录地点与周边环境的关系：' + (guide.highlights[0] || guide.category || guide.title) : 'Use a wider frame to show the destination in context: ' + (guide.highlights[0] || guide.category || guide.title)
    },
    {name: zh ? '主要建筑／景观特征' : 'Principal architectural / landscape feature', desc: guide.highlights[1] || observation},
    {name: zh ? '材质、装饰或自然纹理' : 'Material, ornament or natural texture', desc: observation},
    {
      name: zh ? '环境关系与方向感' : 'Setting and orientation',
      desc: zh ? '从公共且允许停留的位置，把 ' + guide.address + ' 一带的街道、海岸、湖面或周边建筑纳入构图。' : 'From lawful public space, include streets, shore, water or surrounding buildings around ' + guide.address + ' to give the photograph a sense of place.'
    },
    {
      name: zh ? '离开前的反向视角' : 'Reverse view before leaving',
      desc: zh ? '沿返程方向再回看一次地点，常能得到与正面入口不同的空间层次；只使用允许停留的公共位置。' : 'Look back along the return direction for a different spatial relationship from the main approach, using only permitted public stopping points.'
    }
  ];

  const faq = [
    {q: zh ? guide.title + ' 现在开放吗？' : 'Is ' + guide.title + ' open now?', a: guide.hours || (zh ? '本页没有保存固定开放时间，出发前请向当前管理方或现场核对。' : 'No fixed opening schedule is stored here; confirm with the current responsible site before departure.')},
    {q: zh ? '参观 ' + guide.title + ' 需要门票吗？' : 'Do I need a ticket for ' + guide.title + '?', a: guide.tickets || (zh ? '未核实统一门票；若有室内场馆、导览或商业服务，请分别确认。' : 'No single admission price is verified; confirm any interior venue, tour or commercial service separately.')},
    {q: zh ? '这里由谁管理？' : 'Who manages this place?', a: guide.management || (zh ? '以当前主管机构和现场公告为准。' : 'Follow the current responsible authority and on-site notices.')},
    {q: zh ? '怎样前往 ' + guide.title + '？' : 'How do I get to ' + guide.title + '?', a: guide.transport || (zh ? '使用本页独立地图链接并核对最后一段公共通行路线。' : 'Use this page’s dedicated map link and verify the final public-access route.')},
    {q: zh ? '适合拍照吗？' : 'Is photography suitable here?', a: zh ? '可以从允许停留的公共区域拍摄；宗教场所、博物馆、军事或保护区地点应优先遵守现场摄影限制。建议先拍全景，再拍建筑或景观细节。' : 'Photograph from permitted public areas. At religious, museum, military or protected sites, on-site restrictions take priority. Start with a wide context frame, then move to architectural or landscape details.'},
    {q: zh ? '可以和 Corbu Beach 安排在同一天吗？' : 'Can I combine this with Corbu Beach on the same day?', a: zh ? '可以作为行程候选，但本站未统一核实从 Corbu Beach 出发的实时车程、路况或公共交通衔接。请按当天地图、开放时间和返程条件单独规划。' : 'It can be considered as part of the same day, but this guide does not claim a verified live travel time, road condition or public-transport connection from Corbu Beach. Plan using same-day maps, opening and return conditions.'}
  ];

  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'Article',
    headline:guide.title,
    description:guide.description,
    inLanguage:zh ? 'zh-CN' : 'en',
    dateModified:'2026-11-23',
    author:{'@type':'Organization',name:'Corbu Beach Travel Guide'},
    mainEntityOfPage:siteUrl + localePath(locale, '/guides/' + slug),
    ...(guide.image ? {image:guide.image.url} : {})
  };

  return <><Header/><main className="pt-[72px]">
    <article>
      <section className="relative overflow-hidden min-h-[62vh] flex items-end" style={{background:'var(--bg-secondary)'}}>
        {guide.image ? <>
          <div className="absolute inset-0">
            <img src={guide.image.url} alt="" className="w-full h-full object-cover" loading="eager"/>
            <div className="absolute inset-0" style={{background:'var(--hero-overlay)'}}/>
          </div>
          <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28 text-white">
            <a href={localePath(locale)} className="inline-flex items-center gap-2 text-sm mb-10 text-white/80 hover:text-white">← {zh ? '返回 Corbu Beach 指南' : 'Back to Corbu Beach guide'}</a>
            <p className="text-xs uppercase tracking-[0.22em] mb-4 text-white/75">{guide.category || (zh ? '周边独立景点' : 'Independent regional visit')}</p>
            <h1 className="max-w-4xl text-4xl sm:text-6xl font-semibold leading-[1.05] mb-5">{guide.title}</h1>
            <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-white/90 mb-8">{guide.description}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {guide.rating && <span className="rounded-full px-4 py-2 bg-white/15 backdrop-blur-sm">Google Maps {guide.rating}/5 · {guide.reviewCount || (zh ? '评价数未保存' : 'review count not stored')}</span>}
              {guide.hours && <span className="rounded-full px-4 py-2 bg-white/15 backdrop-blur-sm">{guide.hours}</span>}
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-2 font-medium" style={{background:'var(--accent)',color:'#fff'}}>{zh ? '查看位置' : 'View location'} ↗</a>
            </div>
          </div>
        </> : <div className="max-w-6xl mx-auto px-6 py-20">
          <a href={localePath(locale)} className="inline-flex items-center gap-2 text-sm mb-10 underline">← {zh ? '返回 Corbu Beach 指南' : 'Back to Corbu Beach guide'}</a>
          <p className="text-xs uppercase tracking-[0.22em] mb-4" style={{color:'var(--accent)'}}>{guide.category || (zh ? '周边独立景点' : 'Independent regional visit')}</p>
          <h1 className="max-w-4xl text-4xl sm:text-6xl font-semibold leading-[1.05] mb-5">{guide.title}</h1>
          <p className="max-w-3xl text-lg sm:text-xl leading-relaxed">{guide.description}</p>
        </div>}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
        <SectionHeading eyebrow={zh ? '探索' : 'Discover'} title={(zh ? '探索 ' : 'Discover ') + guide.title} />
        <p className="max-w-4xl text-lg leading-relaxed mb-10" style={{color:'var(--text-secondary)'}}>{guide.intro}</p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{zh ? '游览建议' : 'Visit tips'}</h3>
            <ul className="space-y-3">{visitTips.map((tip,index)=><li key={index} className="rounded-xl p-4" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>{tip}</li>)}</ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{zh ? '景点亮点' : 'Highlights'}</h3>
            <ul className="space-y-3">{guide.highlights.map((item,index)=><li key={index} className="rounded-xl p-4" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" style={{background:'var(--bg-tertiary)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow={zh ? '关于' : 'About'} title={(zh ? '关于 ' : 'About ') + guide.title} />
          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-start">
            <div className="rounded-3xl p-7 sm:p-9" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
              <h3 className="text-xl font-semibold mb-4">{zh ? '管理主体与地点性质' : 'Management and site character'}</h3>
              <p className="leading-relaxed mb-5">{guide.management || (zh ? '该地点的实际管理与使用性质以现场和主管机构最新信息为准。' : 'The current responsible authority and site use should be confirmed from the venue or official notices.')}</p>
              <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>{identity}</p>
              <p className="text-sm mt-5" style={{color:'var(--text-muted)'}}>{zh ? '资料核对：' + checked + '。管理安排、开放和现场规则可能变化。' : 'Sources checked ' + checked + '. Management, opening and on-site rules can change.'}</p>
            </div>
            <aside className="rounded-3xl p-7 sm:p-8" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
              <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{color:'var(--accent)'}}>{zh ? '游览速览' : 'At a glance'}</p>
              <p className="text-sm mb-2" style={{color:'var(--text-muted)'}}>{zh ? '地点类型' : 'Type of place'}</p>
              <p className="font-semibold mb-5">{guide.category || (zh ? '区域景点' : 'Regional attraction')}</p>
              <p className="text-sm mb-2" style={{color:'var(--text-muted)'}}>{zh ? '具体位置' : 'Location'}</p>
              <p className="leading-relaxed mb-6">{guide.address}</p>
              <p className="text-sm mb-2" style={{color:'var(--text-muted)'}}>{zh ? '参观重点' : 'What to notice'}</p>
              <p className="leading-relaxed mb-6">{guide.highlights[0]}</p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full font-medium"
                style={{background:'var(--accent)',color:'#fff'}}>{zh ? '查看景点地图' : 'View destination map'} ↗</a>
            </aside>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
        <SectionHeading title={zh ? '基本信息' : 'Basic information'} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FactCard label={zh ? '景点名称' : 'Name'} value={guide.title} />
          <FactCard label={zh ? '类型' : 'Type'} value={guide.category || (zh ? '区域景点' : 'Regional attraction')} />
          <FactCard label={zh ? '地址／所在区域' : 'Address / area'} value={guide.address} />
          <FactCard label={zh ? '管理主体' : 'Management'} value={guide.management || (zh ? '以当前主管机构为准' : 'Confirm current responsible authority')} />
          <FactCard label="Google Maps" value={guide.rating ? guide.rating + '/5 · ' + (guide.reviewCount || (zh ? '评价数未保存' : 'review count not stored')) + ' · ' + (guide.ratingChecked || checked) : (zh ? '未保存可靠评分快照；请打开地图查看实时评分。' : 'No reliable rating snapshot stored; open Maps for the live rating.')} />
          <FactCard label={zh ? '地图搜索' : 'Map destination'} value={guide.mapQuery} />
        </div>
      </section>

      <section className="py-14 sm:py-20" style={{background:'var(--bg-secondary)'}}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
            <h2 className="text-2xl font-semibold mb-4">{zh ? '开放时间' : 'Opening hours'}</h2>
            <p className="leading-relaxed">{guide.hours || (zh ? '未保存固定开放时间；请在出发前核对。' : 'No fixed opening schedule is stored; recheck before departure.')}</p>
          </div>
          <div className="rounded-2xl p-6" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
            <h2 className="text-2xl font-semibold mb-4">{zh ? '门票与费用' : 'Tickets and fees'}</h2>
            <p className="leading-relaxed">{guide.tickets || (zh ? '未核实统一门票；特殊场馆或服务请分别确认。' : 'No single admission price is verified; confirm special venues or services separately.')}</p>
          </div>
          <div className="rounded-2xl p-6" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
            <h2 className="text-2xl font-semibold mb-4">{zh ? '交通方式' : 'Getting there'}</h2>
            <p className="leading-relaxed mb-4">{guide.transport || (zh ? '使用本页独立地图并核对最后一段公共通行路线。' : 'Use this page’s dedicated map and verify the final public-access route.')}</p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>{zh ? '打开该景点地图' : 'Open destination map'} ↗</a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
        <SectionHeading eyebrow={zh ? '发现魅力' : 'Discover the character'} title={guide.title + (zh ? ' 的历史、特色与体验' : ': history, character and experience')} />
        <div className="grid md:grid-cols-2 gap-6">
          {storySections.map((section,index)=><div key={section.title} className="rounded-2xl p-6 sm:p-7" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
            <div className="text-sm font-semibold mb-3" style={{color:'var(--accent)'}}>{String(index+1).padStart(2,'0')}</div>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            {section.paragraphs.map(p=><p key={p} className="leading-relaxed mb-3 last:mb-0" style={{color:'var(--text-secondary)'}}>{p}</p>)}
            {'source' in section && section.source !== undefined && guide.sources[section.source] && <p className="text-sm mt-4"><a href={guide.sources[section.source].url} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>{guide.sources[section.source].label} ↗</a></p>}
          </div>)}
        </div>
      </section>

      <section className="py-14 sm:py-20" style={{background:'var(--bg-tertiary)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow={zh ? '游览路线' : 'Recommended route'} title={zh ? '建议游览顺序' : 'Suggested visiting order'} description={zh ? '以下步骤强调方向与观察顺序，不把未经核实的步行时间或道路条件写死。' : 'These steps provide an orientation and observation sequence without inventing fixed walking times or unverified access conditions.'}/>
          <div className="space-y-4">{routeSteps.map((step,index)=><div key={index} className="flex gap-5 items-start rounded-2xl p-5 sm:p-6" style={{background:'var(--card-bg)',border:'1px solid var(--border-color)'}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold" style={{background:'var(--accent)',color:'white'}}>{index+1}</div>
            <p className="leading-relaxed pt-2">{step}</p>
          </div>)}</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading title={zh ? '游客须知' : 'Visitor guidelines'} />
            <ul className="space-y-3">{(guide.visitorNotes?.length ? guide.visitorNotes : visitTips).map((note,index)=><li key={index} className="rounded-xl p-4" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>{note}</li>)}</ul>
          </div>
          <div>
            <SectionHeading title={zh ? '拍摄机位' : 'Photo spots'} />
            <div className="space-y-4">{photoSpots.map((spot,index)=><div key={spot.name} className="rounded-xl p-5" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
              <p className="text-sm font-semibold mb-2" style={{color:'var(--accent)'}}>{index+1}. {spot.name}</p>
              <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>{spot.desc}</p>
            </div>)}</div>
            <p className="text-sm leading-relaxed mt-5" style={{color:'var(--text-muted)'}}>{zh ? '摄影以现场规则为准；宗教、博物馆、军事、保护区和私人物业尤其应先确认是否允许拍摄。' : 'Photography is subject to on-site rules; religious, museum, military, protected and private sites especially may restrict photography.'}</p>
          </div>
        </div>
      </section>

      {guide.image && <section className="py-14 sm:py-20" style={{background:'var(--bg-secondary)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title={zh ? '实景照片' : 'Real-location photographs'} description={zh ? '每个新增景点至少配置 1 张与地点名称相符、可追溯来源的实景照片；后续可继续扩展到 5 张。' : 'Each new attraction has at least one traceable, location-matched photograph; the gallery can be expanded up to five images as more verified sources are added.'}/>
          <figure className="max-w-4xl">
            <div className="overflow-hidden rounded-3xl" style={{border:'1px solid var(--border-color)'}}>
              <img src={guide.image.url} alt={guide.image.alt} className="w-full h-auto object-cover" loading="lazy"/>
            </div>
            <figcaption className="text-xs mt-2" style={{color:'var(--text-muted)'}}><a href={guide.image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{guide.image.credit} ↗</a></figcaption>
          </figure>
        </div>
      </section>}

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
        <SectionHeading
          title={zh ? '住宿建议' : 'Accommodation'}
          description={zh ? '不把住宿平台价格写死，也不虚构“官方推荐酒店”。以下建议按景点所在区域与行程结构选择住宿位置，实际房价、停车、早餐和营业状态应在预订时确认。' : 'Rather than freezing platform prices or inventing “official hotel recommendations,” these options focus on the most practical areas for this destination. Confirm live rates, parking, breakfast and operating status when booking.'}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {stayCards.map(card=><div key={card.title} className="rounded-2xl p-6" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
            <p className="text-xs uppercase tracking-[0.16em] mb-2" style={{color:'var(--accent)'}}>{card.tag}</p>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>{card.desc}</p>
            <p className="text-sm mt-4" style={{color:'var(--text-muted)'}}>{zh ? '价格：随日期、季节与房型变化' : 'Price: varies by date, season and room type'}</p>
          </div>)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 sm:py-20">
        <SectionHeading title={zh ? '常见问题' : 'Frequently asked questions'} />
        <div className="grid md:grid-cols-2 gap-4">{faq.map(item=><div key={item.q} className="rounded-2xl p-6" style={{background:'var(--bg-tertiary)',border:'1px solid var(--border-color)'}}>
          <h3 className="font-semibold mb-3">{item.q}</h3>
          <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>{item.a}</p>
        </div>)}</div>
      </section>

      <section className="py-14 sm:py-20" style={{background:'var(--bg-tertiary)'}}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading title={zh ? '游客评价' : 'Visitor reviews'} />
            {guide.rating ? <p className="leading-relaxed">{zh ? 'Google Maps 快照：' + guide.rating + '/5（' + (guide.reviewCount || '评价数未保存') + '），核对日期 ' + (guide.ratingChecked || checked) + '。评分来自第三方地图平台，本网站不复制个人评论。' : 'Google Maps snapshot: ' + guide.rating + '/5 (' + (guide.reviewCount || 'review count not stored') + '), checked ' + (guide.ratingChecked || checked) + '. The rating is a third-party map snapshot; this site does not reproduce individual reviews.'}</p> : <p className="leading-relaxed">{zh ? '未保存可靠的 Google Maps 评分数据，以避免补写或猜测；请通过地图查看当前公开评价。' : 'No reliable Google Maps rating is stored here, avoiding guessed data. Use the map link for current public reviews.'}</p>}
            <p className="mt-4"><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>{zh ? '查看当前 Google Maps 信息与评价' : 'View current Google Maps information and reviews'} ↗</a></p>
          </div>
          <div>
            <SectionHeading title={zh ? '交通指南与地图' : 'Transport guide and map'} />
            <p className="leading-relaxed mb-3">{guide.address}</p>
            <p className="leading-relaxed mb-5" style={{color:'var(--text-secondary)'}}>{guide.transport || (zh ? '使用专属地点搜索并确认最后一段通行条件。' : 'Use the dedicated destination search and verify final access conditions.')}</p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full px-5 py-3 font-medium" style={{background:'var(--accent)',color:'white'}}>{zh ? '打开专属 Google Maps' : 'Open dedicated Google Maps'} ↗</a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <SectionHeading title={zh ? '资料来源与出发前复核' : 'Sources and pre-visit checks'} />
        <ul className="space-y-2">{guide.sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>{source.label} ↗</a></li>)}</ul>
        <p className="mt-5 leading-relaxed" style={{color:'var(--text-muted)'}}>{zh ? '资料于' + checked + '核对。开放、票种、保护规定、宗教活动、交通与临时限制可能变化，出发前应向对应管理方复核。' : 'Sources checked ' + checked + '. Opening, tickets, protected-area rules, religious use, transport and temporary restrictions can change; recheck with the responsible site before departure.'}</p>
      </section>
    </article>
    <RegionalGuides exclude={slug}/>
  </main><Footer/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/>
  </>;
}
