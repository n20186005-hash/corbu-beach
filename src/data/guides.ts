export type Guide = {
 slug: string; title: string; description: string; intro: string;
 highlights: string[]; sections: {title:string; paragraphs:string[]; source?:number}[];
 address:string; mapQuery:string; sources:{label:string;url:string}[];
};
const minacSchedule = {label:'MINAC — current schedule and tickets',url:'https://minac.ro/en/program-tarife/'};
export const guides: Record<string, Guide[]> = {
 en: [
  {
   slug:'histria', title:'Histria: the ancient city and its museum',
   description:'Understand Histria’s Greco-Roman ruins, on-site museum and separate entry arrangements before planning a cultural visit in the Corbu region.',
   intro:'For a change of focus from the coast, Histria offers an archaeological visit built around an ancient city and the objects found there. Treat it as a separate cultural destination in the wider region: first confirm its visitor arrangements, then decide how it fits your own journey from Corbu.',
   highlights:['An open-air archaeological site and an on-site museum.','Greek, Roman and early Christian layers to interpret.','A visit where the finds and the surviving buildings explain one another.'],
   address:'Histria, Istria commune, Constanța County · tourism profile: DJ226A',mapQuery:'Histria Museum Complex Istria Romania',
   sections:[
    {title:'What you are visiting',paragraphs:['MINAC dates Histria’s foundation by settlers from Miletus to the seventh century BC. The city developed beside what is now Lake Sinoe. Its remains include fortifications, temples, baths and houses; the site museum presents finds such as pottery, coins and inscriptions.'],source:0},
    {title:'Read the site and museum together',paragraphs:['Use the museum to put individual objects in context, then look for the corresponding building types outside. An inscription, a coin and a wall each answer a different question: who lived here, how the city traded and how its spaces were organized. This is an editorial approach to the visit, not a prescribed route through excavation areas.','Stay on the visitor route shown on site. Do not assume every research sector described in archaeological literature is open to visitors. Ask staff which areas can currently be reached.']},
    {title:'Hours, tickets and the right destination',paragraphs:['On 10 November 2026, MINAC listed Histria’s museum and fortress as separate entries, both daily 09:00–17:00. Other official tourism listings show different seasonal arrangements. Confirm current opening and whether your chosen ticket covers the museum, the site or both with MINAC before departure.','Histria is the complex in Istria commune. MINAC’s central museum building in Constanța is a separate destination and is listed as closed for rehabilitation; do not use that headquarters as the Histria entrance.'],source:1},
    {title:'Plan the practical details',paragraphs:['Check the current route from your own accommodation to the named complex. We have not verified a Corbu-to-Histria transport connection or journey time. Use the destination map to research the approach and confirm any accessibility, parking or guided-visit needs directly with the custodian.','For an outdoor archaeological visit, prepare for the day’s weather and bring suitable footwear. Decide on a return plan before adding a beach visit. A ticketed museum stop and a reserve beach can have different access requirements.']}
   ],
   sources:[{label:'MINAC — Histria complex and history',url:'https://minac.ro/en/complexul-muzeal-histria/'},minacSchedule,{label:'Romania Atractivă — Histria visitor profile',url:'https://romania-atractiva.ro/en/profiles/histria-fortress'}]
  },
  {
   slug:'roman-mosaic', title:'Constanța’s Roman Edifice with Mosaic',
   description:'A visitor guide to the Roman Mosaic building at Ovid Square: ancient port history, what to look for and how to find the correct museum entrance.',
   intro:'The Roman Edifice with Mosaic is a focused cultural alternative to a beach day: it connects a surviving decorated floor with the working port of ancient Tomis. It is a destination in Constanța, separate from Corbu; research the onward journey before adding it to your plans.',
   highlights:['A mosaic in its original architectural setting.','A terraced complex linked to the ancient port.','An opportunity to look at decoration alongside commerce.'],
   address:'Ovid Square No. 5 (Piața Ovidiu), Constanța',mapQuery:'Edificiul Roman cu Mozaic Constanta',
   sections:[
    {title:'More than a decorated floor',paragraphs:['MINAC describes a Roman-Byzantine complex on three terraces above the ancient port. Part of its polychrome mosaic survives in place, with geometric and plant designs. Vaulted storage rooms and finds including amphorae connect the building to Tomis’s trade. The structure dates to the turn of the third and fourth centuries AD.'],source:0},
    {title:'What to look for',paragraphs:['Start with the overall layout before focusing on small details. Look at the changes in level and the relationship between a formal decorated hall and storage spaces. Then compare the repeated shapes and plant patterns in the mosaic.','Use the museum interpretation to distinguish surviving ancient material from later conservation work. Photograph only where staff allow, and follow barriers around fragile surfaces. These are viewing suggestions rather than a guarantee that every part is accessible on your visit.']},
    {title:'Use the Mosaic building’s own entry',paragraphs:['MINAC’s schedule page checked on 10 November 2026 lists the Roman Edifice with Mosaic at Ovid Square No. 5, Wednesday–Sunday 09:00–17:00, with a dedicated ticket link. Recheck the live entry for availability and ticket categories.','The main MINAC headquarters, listed separately as closed for rehabilitation, is not the same visitor entry. Check that your map and ticket name the Mosaic building.'],source:1},
    {title:'Fit the visit to your city plans',paragraphs:['This page does not promise a direct bus, drive time or combined route from Corbu. Confirm the current connection to Constanța and the final approach to Ovid Square for your chosen date. Ask the museum about steps, access needs and any conservation-related limitations.','If architecture is your main interest, compare this ancient port building with the separately managed Casino. Choose entries and opening days independently; one attraction’s ticket does not establish access to another.']}
   ],
   sources:[{label:'MINAC — Roman Edifice with Mosaic',url:'https://minac.ro/en/edificiul-roman-cu-mozaic/'},minacSchedule]
  },
  {
   slug:'constanta-casino',title:'Constanța Casino: architecture and a cultural visit',
   description:'Plan a visit to Constanța’s Art Nouveau Casino: distinguish the seafront exterior from ticketed interior access and check current room closures.',
   intro:'The Casino is an architectural and cultural destination on Constanța’s seafront. It offers a different subject from Corbu’s natural coast: the design of a landmark building and its present exhibition programme. Plan it as a separate city visit, with its own opening and entry arrangements.',
   highlights:['An Art Nouveau landmark inaugurated in 1910.','Marine-inspired exterior decoration.','A cultural programme with separately controlled interior access.'],
   address:'Bulevardul Regina Elisabeta 4, Constanța',mapQuery:'Cazinoul Constanta Bulevardul Regina Elisabeta 4',
   sections:[
    {title:'Look at the building’s relationship with the sea',paragraphs:['Constanța City Hall places the Casino on the pedestrian seafront and dates its inauguration to 1910. Its Art Nouveau exterior uses marine-inspired decoration. The city guide explains that the building stands on a sea platform associated with engineer Anghel Saligny.'],source:0},
    {title:'Choose an exterior or interior visit',paragraphs:['Looking at the building from the waterfront and entering its exhibition spaces are different plans. For the exterior, think about how the façade, platform and sea appear together. For an interior visit, check the operator’s programme and buy the appropriate entry rather than assuming access from the promenade.','Do not build your visit around a particular room until you have checked that it is open. Ask about accessibility and permitted photography if these affect your choice.']},
    {title:'Current programme and room closures',paragraphs:['On 10 November 2026, the operator website displayed Wednesday–Monday 10:00–18:00, Tuesday closed, and a temporary closure of the Hall of Mirrors. It also displayed special-date exceptions. Follow its live notices and ticket service for your date; an older 2025 regulation lists different weekly days.','A listed general schedule does not promise access to every room or event. This guide does not publish a fixed ticket price because available programmes and entry categories can change.'],source:1},
    {title:'Plan your own city connection',paragraphs:['Use the operator’s address when researching travel. A destination map does not confirm the journey from Corbu, a parking space or a public-transport connection. Check the return leg as well as arrival before combining a coastal stay with a city visit.','For another cultural theme, the Roman Mosaic building explores the ancient port, while Histria concerns a separate archaeological city. Choose according to your interests and independently confirmed access rather than treating these as a verified timed circuit.']}
   ],
   sources:[{label:'Constanța City Hall — historic visitor route',url:'https://primaria-constanta.ro/pagina-pmc/comunitate/descopera-constanta/traseu-turistic/'},{label:'Casino operator — programme, notices and ticket link',url:'https://cazinoul.com/'},{label:'Casino — dated May 2025 visitor regulation',url:'https://cazinoul.com/wp-content/uploads/2025/05/Regulament.pdf'}]
  }
 ],
 zh: [
  {
   slug:'histria',title:'希斯特里亚 Histria：古城遗址与现场博物馆',description:'了解Histria希腊罗马遗址、现场博物馆及分开售票的安排，再规划科尔布区域的文化游览。',
   intro:'想从海滨风景转向古代历史，可以研究 Histria 的古城遗址与出土文物。它是区域内独立的文化目的地；先确认参观安排，再判断如何与自己的科尔布行程衔接。',
   highlights:['露天考古遗址与现场博物馆。','希腊、罗马与早期基督教时期的历史层次。','将出土器物与建筑遗存联系起来理解。'],address:'Histria，Istria乡，康斯坦察县 · 旅游档案地址：DJ226A',mapQuery:'Histria Museum Complex Istria Romania',
   sections:[
    {title:'参观的是什么',paragraphs:['MINAC 将 Histria 的建立追溯到公元前7世纪来自米利都的移民。古城位于如今的 Sinoe 湖畔，遗存包括防御工事、神庙、浴场与住宅；现场博物馆展出陶器、钱币、铭文等出土物。'],source:0},
    {title:'将博物馆与遗址结合阅读',paragraphs:['可先利用博物馆说明理解器物背景，再在室外寻找相关建筑类型。铭文、钱币与墙体分别回答居民身份、贸易活动和空间组织等不同问题。这是编辑性的参观思路，并非穿越发掘区的指定路线。','请沿现场游客通道活动。考古文献中提及的研究区域不一定全部开放，应向工作人员确认当天可进入的范围。']},
    {title:'时间、门票与正确目的地',paragraphs:['2026年11月10日，MINAC 将 Histria 博物馆与城址列为不同参观项目，均显示每日09:00–17:00。其他官方旅游目录的季节安排有所不同，请出发前向 MINAC 确认当期时间，以及门票覆盖博物馆、遗址或两者。','Histria 位于 Istria 乡。康斯坦察的 MINAC 中央馆是另一个地点，官网另列其因修复暂时关闭；不要把中央馆当作 Histria 的入口。'],source:1},
    {title:'安排实际行程',paragraphs:['从自己的住宿位置核对至该遗址的当前路线。本指南未核实 Corbu 至 Histria 的接驳或行程时长。请利用目的地地图研究抵达方式，并直接向管理方确认无障碍、停车或导览需求。','露天遗址参观应按天气准备鞋服。在增加海滩停留前，先决定返程；收费文化场馆与保护区海滩适用的进入要求可能不同。']}
   ],sources:[{label:'MINAC — Histria遗址与历史',url:'https://minac.ro/en/complexul-muzeal-histria/'},{label:'MINAC — 当前时间与门票',url:'https://minac.ro/en/program-tarife/'},{label:'Romania Atractivă — Histria旅游档案',url:'https://romania-atractiva.ro/en/profiles/histria-fortress'}]
  },
  {
   slug:'roman-mosaic',title:'康斯坦察罗马马赛克建筑：从地面图案看古港贸易',description:'了解奥维德广场罗马马赛克建筑的古港背景、观察重点与正确入口，核对当前开放和门票。',
   intro:'罗马马赛克建筑将原址保存的装饰地面与古代 Tomis 港口生活联系起来，适合研究海滨之外的文化主题。它位于康斯坦察，与 Corbu 是不同目的地；加入行程前，请另行确认交通衔接。',
   highlights:['原建筑环境中保留的马赛克。','与古港联系紧密的台地建筑。','将装饰艺术与商业用途一起观察。'],address:'Ovid Square No. 5（Piața Ovidiu），康斯坦察',mapQuery:'Edificiul Roman cu Mozaic Constanta',
   sections:[
    {title:'不只是一块装饰地面',paragraphs:['MINAC 介绍该罗马—拜占庭建筑由古港上方的三层台地组成。部分多彩马赛克保留在原址，带有几何与植物图案。拱顶仓储空间、双耳陶罐等发现反映 Tomis 的贸易活动；建筑年代可追溯至公元3至4世纪之交。'],source:0},
    {title:'怎样观察更有收获',paragraphs:['先看整体结构，再观察细节：留意高差，以及正式装饰大厅与仓储空间的关系，然后比较马赛克中重复的形状和植物纹样。','借助馆内说明区分古代遗存与后期保护工程。只在工作人员允许的范围摄影，并遵守脆弱地面周围的隔离设施。以上是观察建议，不保证参观时每个区域均可进入。']},
    {title:'使用马赛克建筑自己的入口',paragraphs:['2026年11月10日核对的 MINAC 时间表，将罗马马赛克建筑列于 Ovid Square No. 5，周三至周日09:00–17:00，并提供对应购票入口。请在官网复核当天开放与票种。','另列为修复关闭的 MINAC 中央馆并非同一入口；请确认地图与门票均对应马赛克建筑。'],source:1},
    {title:'融入自己的城市参观计划',paragraphs:['本页不保证从 Corbu 直达的公交、驾驶时长或组合路线。请按日期核对前往康斯坦察及奥维德广场的连接，并向馆方询问台阶、无障碍和保护工程的影响。','若对建筑感兴趣，可比较古港建筑与另行管理的赌场。两处的开放日与门票需分别确认，一处门票并不证明可进入另一处。']}
   ],sources:[{label:'MINAC — 罗马马赛克建筑',url:'https://minac.ro/en/edificiul-roman-cu-mozaic/'},{label:'MINAC — 当前时间与门票',url:'https://minac.ro/en/program-tarife/'}]
  },
  {
   slug:'constanta-casino',title:'康斯坦察赌场：新艺术建筑与文化参观',description:'规划康斯坦察赌场参观：区分海滨外观与室内展览，查看开放安排、门票和房间临时关闭通知。',
   intro:'康斯坦察赌场是海滨的建筑与文化目的地，与 Corbu 自然海岸的主题不同，关注地标设计与当前展览。请将它作为独立的城市参观项目，分别核对开放与入场安排。',
   highlights:['1910年揭幕的新艺术风格地标。','受海洋启发的外部装饰。','室内展览另有开放与入场管理。'],address:'Bulevardul Regina Elisabeta 4，康斯坦察',mapQuery:'Cazinoul Constanta Bulevardul Regina Elisabeta 4',
   sections:[
    {title:'观察建筑与海的关系',paragraphs:['康斯坦察市政府将赌场定位在步行海滨，并记载其于1910年揭幕。新艺术风格外立面使用海洋题材装饰；城市旅游资料还介绍了与工程师 Anghel Saligny 有关的海上平台。'],source:0},
    {title:'选择外观或室内参观',paragraphs:['从海滨欣赏建筑与进入展览空间，是不同的计划。看外观时可观察立面、平台与海面的组合；若想进入，请查看运营方节目与对应门票，不要把步道通行理解为室内开放。','请先确认你特别想看的房间是否开放。如无障碍或摄影条件影响选择，宜向运营方询问。']},
    {title:'当前节目与房间限制',paragraphs:['2026年11月10日，运营方网站显示周三至周一10:00–18:00、周二关闭，并提示镜厅暂不开放，同时列有特定日期的例外安排。请按参观日期查看即时通知与票务入口；2025年的旧规则文件所列每周开放日有所不同。','一般时间表不保证每个房间或活动均可进入。展览与票种可能变化，本指南不发布固定票价。'],source:1},
    {title:'自行确认城市衔接',paragraphs:['研究交通时请使用运营方地址。目的地地图不能证明从 Corbu 的通行方式、停车位或公交连接；将海滨住宿与城市参观结合前，请同时确认抵达与返程。','罗马马赛克建筑讲述古港故事，Histria 则是一座独立的考古古城。请按兴趣与已确认的开放条件选择，不应将三者当作已核实的计时游览环线。']}
   ],sources:[{label:'康斯坦察市政府 — 历史城区游览资料',url:'https://primaria-constanta.ro/pagina-pmc/comunitate/descopera-constanta/traseu-turistic/'},{label:'赌场运营方 — 当前通知、节目与门票',url:'https://cazinoul.com/'},{label:'赌场 — 2025年5月历史参观规则',url:'https://cazinoul.com/wp-content/uploads/2025/05/Regulament.pdf'}]
  }
 ]
};
