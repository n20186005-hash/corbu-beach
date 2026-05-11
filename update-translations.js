const fs = require('fs');
const path = require('path');

const zhContent = {
  "meta": {
    "title": "科尔布海滩 Plaja Corbu｜罗马尼亚黑海纯净自然保护区 - 游览指南与环保须知",
    "description": "探索罗马尼亚康斯坦察县科尔布海滩(Plaja Corbu)的完整指南。黑海最后一片未被重度商业开发的野生海滩。"
  },
  "header": {
    "home": "首页",
    "gallery": "图库",
    "reviews": "评价",
    "map": "地图",
    "backToHome": "返回首页"
  },
  "hero": {
    "title": "科尔布海滩",
    "subtitle": "罗马尼亚黑海纯净自然保护区",
    "rating": "4.4",
    "reviewCount": "5,399 条评价",
    "hours": "全天开放",
    "openMaps": "查看位置"
  },
  "intro": {
    "title": "探索科尔布海滩",
    "description": "如果你想逃离现代文明的喧嚣，科尔布海滩就是你的绝佳去处。这里没有震耳欲聋的迪厅音乐，没有整齐划一的排队沙滩椅，只有海浪拍打碎石的白噪音和清脆的野鸟鸣叫。\n\n当你把车停在远处的指定区域，徒步走向海滩时，眼前是一片由细沙与碎贝壳混合而成的广袤海岸。这里的海水清澈透明，呈现出一种在商业海滩罕见的透亮蓝色。远处，几只水鸟在湿地边起落。这里给人的感觉不是一个传统意义上的“度假胜地”，而是一片被时间遗忘的生态荒野，每一寸空气都透着自由与咸腥的海洋气息。\n\n需要注意的是，这里没有救生员、淋浴间或便利店。这种原始感可能会让习惯城市生活的人感到不便，但对于渴望深度亲近自然的人来说，这正是它的魅力所在。",
    "visitGuide": {
      "title": "环保与法规限制",
      "items": [
        "绝对禁止沙滩野营：在沙滩、沙丘或植被区搭帐篷是严格禁止的违法行为，违者将面临 3000 至 6000 列伊（RON）的巨额罚款",
        "禁止车辆驶入沙滩与草甸：车辆必须停放在指定的合法停车场内",
        "禁止篝火：沙滩区域严禁生火",
        "必须缴纳保护区准入费：现场常有巡警抽查，未缴费将面临高额罚款"
      ]
    },
    "alsoKnownAs": {
      "title": "景区特色",
      "items": [
        "罗马尼亚黑海沿岸最后几片未被重度商业开发的野生海滩之一",
        "隶属于联合国教科文组织世界遗产——多瑙河三角洲生物圈保护区",
        "全长约20公里的开阔海岸线，沙丘与盐渍化植被形成独特的“荒原风”",
        "拥有超过150种鸟类和珍稀植物，是观鸟者的天堂"
      ]
    }
  },
  "knowledge": {
    "title": "发现科尔布海滩的魅力",
    "sections": [
      {
        "id": "history",
        "title": "历史背景与地位",
        "content": "科尔布海滩被公认为罗马尼亚黑海沿岸最后几片未被重度商业开发的野生海滩之一。它隶属于联合国教科文组织世界遗产——多瑙河三角洲生物圈保护区的南部延伸地带，不仅是受法律严格保护的自然遗产，也是欧洲排名前列的优质原始海滩。\n\n历史上，这一区域曾是军事控制区，客观上使得它在罗马尼亚共产主义时期免于被大规模旅游开发。21世纪初，随着人们对生态旅游的重视，科尔布因其丰富的生物多样性被纳入重点保护。近年来官方出台的严厉环境保护法规，确保了它依然能维持“罗马尼亚最纯净海岸”的底色。"
      },
      {
        "id": "architecture",
        "title": "建筑特色与风格",
        "content": "严格意义上，海滩核心保护区内没有任何高楼大厦或混凝土建筑。海滩全长约 20 公里，视野极其开阔。海滩后方是起伏的低矮沙丘和盐渍化植被，这种天然的“荒原风”与湛蓝的黑海形成了鲜明的对比。\n\n建筑风格呈现纯粹的自然主义。区域内的少量设施均为极简的木制结构或环保型民宿，设计多采用原木与茅草，旨在降低对周边脆弱生态系统的视觉与环境冲击。"
      },
      {
        "id": "culture",
        "title": "文化价值",
        "content": "这里倡导“慢生活”与“无痕游览（Leave No Trace）”文化。与南边高度商业化、喧闹的马马亚（Mamaia）不同，科尔布是观鸟者、生态环保主义者和寻求精神宁静者的避风港。它代表了人类与脆弱自然生态边界的坚守。"
      },
      {
        "id": "experience",
        "title": "核心体验",
        "content": "这里给人的感觉不是一个传统意义上的“度假胜地”，而是一片被时间遗忘的生态荒野，每一寸空气都透着自由与咸腥的海洋气息。\n\n没有救生员、淋浴间或便利店，这种原始感可能会让习惯城市生活的人感到不便，但对于渴望深度亲近自然的人来说，这正是它的魅力所在。"
      }
    ]
  },
  "basicInfo": {
    "title": "基础信息",
    "officialName": "正式名称",
    "officialNameValue": "Plaja Corbu",
    "type": "景点类型",
    "typeValue": "野生自然海滩、多瑙河三角洲生物圈保护区、生态旅游目的地",
    "country": "国家",
    "countryValue": "罗马尼亚 (Romania)",
    "city": "城市",
    "cityValue": "康斯坦察县，科尔布村 (Corbu)",
    "googleRating": "综合评分",
    "phone": "联系电话",
    "phoneValue": "+40-240-518-924 (多瑙河三角洲保护区管理局)",
    "address": "地址",
    "addressValue": "Plaja Corbu, Corbu 907085, Constanța, Romania"
  },
  "hours": {
    "title": "开放时间",
    "outdoor": "海滩全域",
    "outdoorTime": "全年全天开放",
    "lighthouse": "最佳游览时间",
    "summer": "夏季（6月至8月）",
    "summerTime": "水上活动与观鸟的最佳时节",
    "winter": "其他季节",
    "winterTime": "适合散步与摄影",
    "warning": "温馨提示",
    "warningTime": "由于地处自然保护区且无照明设施，建议在日出至日落期间游览。",
    "tip": "请务必遵守保护区法规，做到无痕游览。"
  },
  "tickets": {
    "title": "门票价格",
    "outdoor": "准入规定",
    "outdoorPrice": "免费进入，但必须缴纳保护区准入费",
    "lighthouse": "多瑙河三角洲生物圈保护区（ARBDD）准入费",
    "adults": "个人准入费",
    "adultsPrice": "约 5 RON/天，15 RON/周",
    "students": "车辆准入费",
    "studentsPrice": "约 10 RON/天",
    "children": "缴费方式",
    "childrenPrice": "可通过 ARBDD 官网或罗马尼亚本地短信在线支付",
    "card": "违规处罚",
    "cardPrice": "现场常有巡警抽查，未缴费或违规停车将面临高额罚款"
  },
  "transport": {
    "title": "交通方式",
    "airport": "从康斯坦察米哈伊尔·科格尔尼恰努国际机场 (CND) 出发",
    "airportDesc": "最近机场，距离约 25-30 公里。最便捷的方式是在机场直接租车自驾，或呼叫网约车（Bolt/Uber）及正规出租车前往，车程约 30-40 分钟。由于科尔布村较为偏僻，若是打车，建议提前与司机确认返程的预约方式。",
    "selfDrive": "自驾出行（推荐）",
    "selfDriveDesc": "从康斯坦察市出发，沿 DN226 公路向北行驶约 30 公里（约 45 分钟）。进入科尔布村后，需经过一段未经铺设的土路（Gravel Road）。极其重要：车辆必须停放在指定的合法停车场，严禁驶入沙丘、植被区或沙滩，否则将面临巨额罚款。",
    "bus": "公共交通",
    "busDesc": "从康斯坦察火车站搭乘前往科尔布村的城际巴士（Maxi-Taxi），抵达村庄中心后需步行约 3-4 公里抵达海边。",
    "intercity": "从布加勒斯特亨利·科安德国际机场 (OTP) 出发",
    "intercityDesc": "距离约 250 公里。旅客需先从布加勒斯特机场搭乘机场快线或火车前往布加勒斯特北站（Gara de Nord），转乘城际高铁（CFR）前往康斯坦察市（车程约 2-2.5 小时）。抵达康斯坦察火车站后，再租车、打车或换乘前往科尔布村的城际小巴。",
    "cycling": "私人包车/接送机",
    "cyclingDesc": "如果携带较多露营装备，建议提前在网上预订从康斯坦察机场或火车站直达科尔布村合法住宿点的私人包车服务，省去搬运和换乘的麻烦。",
    "tips": "出行建议",
    "tipsDesc": "提前下载离线地图，确保手机有足够电量。遵守交通及停车法规。"
  },
  "route": {
    "title": "游览路线",
    "supplementsTitle": "游览须知与法规",
    "overview": "建议安排半日至一日的生态游览。提前在线购买保护区门票，抵达后将车停在合法区域，徒步进入海滩，白天游泳、观鸟、野餐，傍晚欣赏黑海日出或日落后离开。",
    "steps": [
      "支付准入费：出发前或在进入科尔布村时，通过手机短信或 ARBDD 官网完成个人与车辆的准入费支付",
      "合规停车与徒步：将车辆停放在官方指示的停车场，顺着步行土路穿越低矮植被区前往海滩",
      "贝壳海滩漫步：抵达海岸线，向北或向南步行，避开入口处的人群，寻找安静的沙滩区",
      "自然观察：在靠近湖泊与海洋交汇的湿地区域，使用望远镜观察鹈鹕、白鹭等珍稀候鸟",
      "环保野餐：在沙滩上享用自带的冷餐（严禁生火），静享海天一色的美景",
      "无痕离开：游览结束后，务必将产生的所有垃圾（包括果皮纸屑）装入随身垃圾袋并带离保护区"
    ],
    "supplements": [
      "绝对禁止沙滩野营：在沙滩、沙丘或植被区搭帐篷是严格禁止的违法行为，违者将面临 3000 至 6000 列伊（RON）的巨额罚款",
      "极度缺乏遮蔽物：海滩没有任何树荫或商业遮阳伞，请务必带足饮用水、食物，并做好物理防晒（带上防风的遮阳伞或帐篷天幕，但当日必须撤走）",
      "风大浪急：黑海在此处的风浪有时较大，且无救生员值守，下海游泳需量力而行，注意暗流",
      "禁止篝火：沙滩区域严禁生火",
      "蚊虫防护：夏季傍晚湿地区域蚊虫极多，强效驱蚊液是必备品"
    ]
  },
  "photoSpots": {
    "title": "拍照机位",
    "spots": [
      {
        "name": "微观贝壳沙滩",
        "desc": "这里的沙滩混合了大量色彩斑斓的碎贝壳，非常适合宏观特写摄影"
      },
      {
        "name": "湿地与飞鸟",
        "desc": "携带长焦镜头，在安全距离外拍摄受保护的野生鸟类起飞的瞬间"
      },
      {
        "name": "海天一色全景",
        "desc": "利用开阔的平角视野，拍摄毫无人工建筑遮挡的黑海壮阔海岸线"
      },
      {
        "name": "金色小时光线",
        "desc": "早晚的“金色小时”光线最柔和，能拍出沙丘与大海交织的壮丽色彩"
      }
    ],
    "tips": "拍照补充说明",
    "tipsContent": "早晚的“金色小时”光线最柔和，能拍出沙丘与大海交织的壮丽色彩。由于是野生动物保护区，强烈建议不要使用无人机，以免惊扰栖息的珍稀鸟类，部分区域飞行可能触犯保护区条例。"
  },
  "hotels": {
    "title": "住宿建议",
    "hotels": [
      {
        "name": "合规露营与房车",
        "desc": "科尔布村内以及海滩保护区外围，有私人经营的合法露营地（如 Camping Corbu 等），提供水电与卫浴设施",
        "price": "提前预订"
      },
      {
        "name": "环保木屋民宿",
        "desc": "村内有许多极具设计感的独立木屋或民宿，提供本地特色的鲜鱼汤（Bors de Peste）",
        "price": "提前预订"
      },
      {
        "name": "轻奢海景公寓",
        "desc": "邻近的纳沃达里（Năvodari，车程 20 分钟）拥有众多带泳池的高端现代化海景公寓，适合白天前往科尔布探险、晚上回归现代文明的游客",
        "price": "提前预订"
      }
    ],
    "supplements": "住宿补充说明",
    "supplementsContent": "千万不要抱有侥幸心理在沙滩上偷偷露营过夜，当地环保警察（Garda de Mediu）会进行夜间巡逻。夏季旺季村内的合法营地与民宿非常抢手，务必提前 1-2 个月预订。"
  },
  "gallery": {
    "title": "精彩照片",
    "subtitle": "科尔布海滩自然风光与黑海海岸线",
    "captions": [
      "科尔布海滩全景",
      "原始贝壳沙滩",
      "清澈黑海海水",
      "沙丘与植被",
      "海岸线风光",
      "日落景色",
      "自然之美",
      "生态荒野"
    ],
    "viewAll": "在 Google Maps 查看位置"
  },
  "reviews": {
    "title": "游客评价",
    "declaration": "评价信息可透过 Google Maps 查看（外部链接）。",
    "moreReviews": "在 Google Maps 查看更多评价",
    "items": [
      {
        "name": "张明",
        "date": "2026年4月",
        "rating": 5,
        "text": "太美了！这片海滩完全没有任何商业化痕迹，海水清澈见底，贝壳沙滩超适合拍照。切记要遵守环保规定，不要开车进沙滩。"
      },
      {
        "name": "李华",
        "date": "2026年3月",
        "rating": 5,
        "text": "罗马尼亚隐藏的宝石！作为生态旅游爱好者，这里简直是天堂。观鸟体验绝佳，鹈鹕就在眼前飞过。"
      },
      {
        "name": "王芳",
        "date": "2026年2月",
        "rating": 4,
        "text": "非常原始的海滩，适合喜欢安静的旅行者。记得带好防晒和驱蚊液，做好充分准备再来。"
      },
      {
        "name": "陈伟",
        "date": "2026年1月",
        "rating": 5,
        "text": "看日落的绝佳地点！没有任何人工建筑遮挡视野，日落时分整个天空被染成金色，美得令人窒息。"
      }
    ]
  },
  "mapSection": {
    "title": "交通指南",
    "subtitle": "Plaja Corbu, Corbu 907085, Constanța, Romania",
    "openMaps": "在 Google Maps 查看"
  },
  "corbuFooter": {
    "rights": "© 2026 科尔布海滩生态旅游指南 · 保留所有权利。",
    "privacy": "隐私政策",
    "terms": "服务条款",
    "cookies": "Cookie 设置",
    "officialResourcesTitle": "相关资源与资讯",
    "disclaimer": "本网站是一个独立的第三方旅游资讯项目，旨在推广无痕游览与生态保护。我们与当地政府或其他官方机构没有任何关联。"
  },
  "privacy": {
    "title": "隐私政策",
    "lastUpdated": "最后更新：2026年5月",
    "sections": [
      {
        "heading": "我们收集的信息",
        "content": "我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）；Cookie 和类似技术；您通过联系表格或电子邮件自愿提供的任何信息。"
      },
      {
        "heading": "我们如何使用您的信息",
        "content": "我们使用收集到的信息用于：改善网站内容和用户体验；分析流量和使用模式；回应请求；遵守我们的法律义务。"
      },
      {
        "heading": "第三方服务",
        "content": "我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）、谷歌分析（用于流量分析）和 Unsplash（用于图片）。这些服务均有各自的隐私政策。"
      },
      {
        "heading": "您的权利",
        "content": "根据《通用数据保护条例》(GDPR)及相关法规，您享有以下权利：访问您的个人数据；要求更正或删除；反对处理；向监管机构提出投诉。"
      }
    ]
  },
  "terms": {
    "title": "服务条款",
    "lastUpdated": "最后更新：2026年5月",
    "sections": [
      {
        "heading": "访问和使用",
        "content": "访问和使用本网站，即表示您同意受这些服务条款的约束。"
      },
      {
        "heading": "内容使用",
        "content": "本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。"
      },
      {
        "heading": "信息的准确性",
        "content": "我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。"
      },
      {
        "heading": "知识产权",
        "content": "本网站设计和原创内容受版权保护。图片来自 Unsplash，并已获得其许可。Google 地图数据的使用符合 Google 的服务条款。"
      },
      {
        "heading": "责任限制",
        "content": "本网站按\"现状\"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。"
      }
    ]
  },
  "cookieSettings": {
    "title": "Cookie 设置",
    "description": "我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。",
    "lastUpdated": "最后更新：2026年5月",
    "essential": {
      "title": "必要 Cookie",
      "description": "这些 Cookie 对于网站正常运行至关重要，无法禁用。",
      "badge": "始终保持活跃"
    },
    "analytics": {
      "title": "分析型 Cookie",
      "description": "它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。",
      "googleAnalytics": "Google Analytics",
      "analyticsDesc": "它会收集访客如何使用我们网站的匿名信息。"
    },
    "preferences": {
      "title": "偏好 Cookie",
      "description": "它们会记住您的设置，例如语言和主题偏好。",
      "userPref": "用户偏好",
      "prefDesc": "保存您的语言偏好和网站设置。"
    },
    "marketing": {
      "title": "营销 Cookie",
      "description": "它们用于展示相关广告并衡量广告活动的有效性。",
      "personalizedAds": "个性化广告",
      "marketingDesc": "它可以根据你的兴趣为你展示相关的广告。"
    },
    "consentManagement": {
      "title": "同意管理",
      "description": "您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。"
    },
    "save": "保存偏好设置",
    "saved": "设置已保存！",
    "declineAll": "拒绝一切"
  }
};

const enContent = {
  "meta": {
    "title": "Corbu Beach Plaja Corbu | Romania Black Sea Pristine Nature Reserve - Travel Guide",
    "description": "Complete guide to Corbu Beach (Plaja Corbu) in Constanța County, Romania. One of the last undeveloped wild beaches on the Romanian Black Sea coast."
  },
  "header": {
    "home": "Home",
    "gallery": "Gallery",
    "reviews": "Reviews",
    "map": "Map",
    "backToHome": "Back to Home"
  },
  "hero": {
    "title": "Corbu Beach",
    "subtitle": "Romania Black Sea Pristine Nature Reserve",
    "rating": "4.4",
    "reviewCount": "5,399 reviews",
    "hours": "Open 24/7",
    "openMaps": "View Location"
  },
  "intro": {
    "title": "Discover Corbu Beach",
    "description": "If you want to escape the hustle and bustle of modern civilization, Corbu Beach is your perfect destination. There is no thundering nightclub music here, no orderly rows of beach chairs—just the white noise of waves lapping against shells and the clear calls of wild birds.\n\nAs you park your car in the designated area and hike toward the beach, you are greeted by a vast coastline of fine sand mixed with broken shells. The seawater here is crystal clear, displaying a translucent blue rare to find on commercial beaches. In the distance, water birds take flight along the wetlands. This doesn't feel like a traditional \"resort destination\"—it's an ecological wilderness forgotten by time, where every breath carries the scent of freedom and salty ocean air.\n\nNote that there are no lifeguards, showers, or convenience stores here. This primitiveness might seem inconvenient to those used to urban life, but for those yearning to deeply connect with nature, this is exactly its charm.",
    "visitGuide": {
      "title": "Environmental & Legal Restrictions",
      "items": [
        "ABSOLUTELY NO BEACH CAMPING: Pitching tents on beaches, dunes, or vegetation areas is strictly prohibited. Violators face fines of 3,000 to 6,000 RON",
        "NO VEHICLES ON BEACH OR MEADOWS: Vehicles must park in designated legal parking areas",
        "NO CAMPFIRES: Open fires are strictly prohibited on beach areas",
        "RESERVE FEE MANDATORY: Rangers frequently patrol the area; those without payment face hefty fines"
      ]
    },
    "alsoKnownAs": {
      "title": "Highlights",
      "items": [
        "One of the last undeveloped wild beaches on Romania's Black Sea coast",
        "Part of the UNESCO World Heritage Site — Danube Delta Biosphere Reserve",
        "Approximately 20 kilometers of open coastline with unique \"wilderness\" created by sand dunes and saline vegetation",
        "Home to over 150 species of birds and rare plants, a paradise for birdwatchers"
      ]
    }
  },
  "knowledge": {
    "title": "The Charm of Corbu Beach",
    "sections": [
      {
        "id": "history",
        "title": "Historical Background & Significance",
        "content": "Corbu Beach is recognized as one of the last undeveloped wild beaches on Romania's Black Sea coast. It is part of the southern extension of the UNESCO World Heritage Site — the Danube Delta Biosphere Reserve, not only a legally protected natural heritage but also one of Europe's top-quality pristine beaches.\n\nHistorically, this area was under military control, which objectively prevented large-scale tourism development during Romania's communist period. In the early 21st century, as people began to value eco-tourism, Corbu was included in key conservation efforts due to its rich biodiversity. Recent strict environmental regulations ensure it maintains its status as Romania's purest coastline."
      },
      {
        "id": "architecture",
        "title": "Architectural Style & Natural Features",
        "content": "Strictly speaking, there are no high-rise buildings or concrete structures within the core beach reserve. The beach stretches approximately 20 kilometers with extremely open views. Behind the beach are rolling low sand dunes and saline vegetation, creating a unique \"wilderness aesthetic\" in stark contrast to the azure Black Sea.\n\nThe architectural style is purely naturalistic. The few facilities in the area are simple wooden structures or eco-friendly guesthouses, designed with logs and thatch to minimize visual and environmental impact on the fragile ecosystem."
      },
      {
        "id": "culture",
        "title": "Cultural Value",
        "content": "This place promotes a \"slow living\" and \"Leave No Trace\" culture. Unlike the highly commercialized and noisy Mamaia to the south, Corbu is a haven for birdwatchers, eco-environmentalists, and those seeking spiritual tranquility. It represents humanity's commitment to protecting fragile natural ecosystems."
      },
      {
        "id": "experience",
        "title": "Core Experience",
        "content": "This doesn't feel like a traditional \"resort destination\"—it's an ecological wilderness forgotten by time, where every breath carries the scent of freedom and salty ocean air.\n\nThere are no lifeguards, showers, or convenience stores here—this primitiveness might seem inconvenient to those used to urban life, but for those yearning to deeply connect with nature, this is exactly its charm."
      }
    ]
  },
  "basicInfo": {
    "title": "Basic Information",
    "officialName": "Official Name",
    "officialNameValue": "Plaja Corbu",
    "type": "Attraction Type",
    "typeValue": "Wild Natural Beach, Danube Delta Biosphere Reserve, Ecotourism Destination",
    "country": "Country",
    "countryValue": "Romania",
    "city": "City",
    "cityValue": "Constanța County, Corbu Village",
    "googleRating": "Google Rating",
    "phone": "Contact Phone",
    "phoneValue": "+40-240-518-924 (Danube Delta Reserve Administration)",
    "address": "Address",
    "addressValue": "Plaja Corbu, Corbu 907085, Constanța, Romania"
  },
  "hours": {
    "title": "Opening Hours",
    "outdoor": "Beach Area",
    "outdoorTime": "Open year-round, 24/7",
    "lighthouse": "Best Time to Visit",
    "summer": "Summer (June - August)",
    "summerTime": "Best time for water activities and birdwatching",
    "winter": "Other Seasons",
    "winterTime": "Great for walking and photography",
    "warning": "Notice",
    "warningTime": "Due to being in a nature reserve with no lighting, visiting during daylight hours is recommended.",
    "tip": "Please follow reserve regulations and practice Leave No Trace principles."
  },
  "tickets": {
    "title": "Ticket Prices",
    "outdoor": "Entry Rules",
    "outdoorPrice": "Free entry, but Reserve Fee is MANDATORY",
    "lighthouse": "ARBDD Reserve Entrance Fee",
    "adults": "Individual Fee",
    "adultsPrice": "Approx. 5 RON/day, 15 RON/week",
    "students": "Vehicle Fee",
    "studentsPrice": "Approx. 10 RON/day",
    "children": "Payment Methods",
    "childrenPrice": "Online via ARBDD website or local SMS",
    "card": "Penalties",
    "cardPrice": "Rangers frequently patrol; unpaid fees or illegal parking lead to hefty fines"
  },
  "transport": {
    "title": "How to Get Here",
    "airport": "From Mihail Kogălniceanu International Airport (CND)",
    "airportDesc": "Nearest airport, approx. 25-30 km away. Best way is to rent a car or call rideshare (Bolt/Uber) or taxi (30-40 mins). Since Corbu is remote, if taking a taxi, confirm the return trip in advance.",
    "selfDrive": "Self-Drive (Recommended)",
    "selfDriveDesc": "From Constanța city, drive north on DN226 for approx. 30 km (45 mins). After entering Corbu village, traverse a gravel road. EXTREMELY IMPORTANT: Vehicles MUST park in designated legal parking areas. Driving on dunes, vegetation, or beaches is strictly prohibited under threat of hefty fines.",
    "bus": "Public Transport",
    "busDesc": "Take an intercity bus (Maxi-Taxi) from Constanța train station to Corbu village. From the village center, it's about 3-4 km walk to the beach.",
    "intercity": "From Bucharest Henri Coandă International Airport (OTP)",
    "intercityDesc": "About 250 km away. Take train or express bus to Bucharest North Station (Gara de Nord), then intercity train (CFR) to Constanța (2-2.5 hours). From Constanța, rent a car, taxi, or take a Maxi-Taxi to Corbu.",
    "cycling": "Private Transfer",
    "cyclingDesc": "If carrying camping gear, booking a private transfer online from Constanța directly to your legal accommodation in Corbu is highly recommended.",
    "tips": "Travel Tips",
    "tipsDesc": "Download offline maps and ensure your phone is charged. Follow traffic and parking rules strictly."
  },
  "route": {
    "title": "Recommended Route",
    "supplementsTitle": "Visit Guidelines & Regulations",
    "overview": "Plan a half-day to full-day eco-tour. Buy reserve tickets online in advance, park in legal areas, hike to the beach, swim, watch birds, and picnic during the day. Enjoy the Black Sea sunrise or sunset before leaving.",
    "steps": [
      "Pay Entrance Fee: Pay via SMS or ARBDD website before arriving or upon entering the village",
      "Legal Parking & Hiking: Park ONLY in designated areas, hike the dirt path through low vegetation to the beach",
      "Shell Beach Stroll: Walk north or south along the coast to avoid crowds near the entrance",
      "Nature Observation: Near the wetland area, use binoculars to observe pelicans and egrets",
      "Eco-Picnic: Enjoy a cold meal on the beach (NO CAMPFIRES allowed)",
      "Leave No Trace: Collect ALL trash (including fruit peels) and take it out of the reserve"
    ],
    "supplements": [
      "ABSOLUTELY NO BEACH CAMPING: Pitching tents on the beach, dunes, or vegetation is strictly prohibited (fines 3000-6000 RON)",
      "Virtually No Shade: Bring plenty of drinking water, food, and sun protection (canopy tents allowed for daytime but must be removed)",
      "Strong Winds & Waves: The Black Sea can have strong waves here with no lifeguards; swim within your ability",
      "No Campfires: Open fires are strictly prohibited",
      "Mosquito Protection: Summer evenings in wetland areas have extreme mosquito activity; strong repellent is essential"
    ]
  },
  "photoSpots": {
    "title": "Photo Spots",
    "spots": [
      {
        "name": "Shell Beach Macro",
        "desc": "The beach is covered with colorful broken shells, perfect for macro photography"
      },
      {
        "name": "Wetlands & Birds",
        "desc": "Bring a telephoto lens to capture protected wild birds taking flight from a safe distance"
      },
      {
        "name": "Sea Meets Sky Panorama",
        "desc": "Use the open landscape to capture the vast, unobstructed Black Sea coastline"
      },
      {
        "name": "Golden Hour Light",
        "desc": "Early morning and evening 'golden hour' light creates stunning colors of sand dunes and sea"
      }
    ],
    "tips": "Photography Tips",
    "tipsContent": "Golden hour light is the most flattering. Since this is a wildlife reserve, the use of drones is strongly discouraged to avoid disturbing rare birds; flying may violate reserve regulations in some areas."
  },
  "hotels": {
    "title": "Accommodation",
    "hotels": [
      {
        "name": "Legal Camping & RV Sites",
        "desc": "Within Corbu village and outside the reserve, there are private legal campsites (like Camping Corbu) with utilities",
        "price": "Book in advance"
      },
      {
        "name": "Eco-Friendly Wooden Cabins",
        "desc": "The village has beautifully designed cabins and guesthouses offering local fish soup (Bors de Peste)",
        "price": "Book in advance"
      },
      {
        "name": "Năvodari Sea View Apartments",
        "desc": "Nearby Năvodari (20-min drive) offers modern apartments with pools, suitable for daytime explorers returning to modern comforts",
        "price": "Book in advance"
      }
    ],
    "supplements": "Accommodation Tips",
    "supplementsContent": "Do not attempt to secretly camp overnight on the beach; local environmental police (Garda de Mediu) conduct night patrols. During peak summer season, legal campsites and guesthouses book up quickly—reserve 1-2 months in advance."
  },
  "gallery": {
    "title": "Photo Gallery",
    "subtitle": "Corbu Beach Natural Scenery & Black Sea Coastline",
    "captions": [
      "Corbu Beach Panorama",
      "Pristine Shell Beach",
      "Clear Black Sea Waters",
      "Sand Dunes & Vegetation",
      "Coastal Landscape",
      "Sunset View",
      "Natural Beauty",
      "Ecological Wilderness"
    ],
    "viewAll": "View on Google Maps"
  },
  "reviews": {
    "title": "Visitor Reviews",
    "declaration": "Visitor feedback can be viewed via Google Maps (external link).",
    "moreReviews": "View more reviews on Google Maps",
    "items": [
      {
        "name": "Ming W.",
        "date": "April 2026",
        "rating": 5,
        "text": "Absolutely stunning! No commercial development, clear water, and shell beach. Remember to follow eco rules and never drive on the beach."
      },
      {
        "name": "Hua L.",
        "date": "March 2026",
        "rating": 5,
        "text": "Romania's hidden gem! As an eco-tourism enthusiast, this is paradise. The birdwatching experience is incredible."
      },
      {
        "name": "Wei Z.",
        "date": "February 2026",
        "rating": 4,
        "text": "A very pristine beach, perfect for tranquility. Bring sunscreen and mosquito repellent, and prepare well before coming."
      },
      {
        "name": "Jing C.",
        "date": "January 2026",
        "rating": 5,
        "text": "The perfect spot for sunset watching! No artificial structures blocking the view. The sky turns golden—breathtakingly beautiful."
      }
    ]
  },
  "mapSection": {
    "title": "How to Get Here",
    "subtitle": "Plaja Corbu, Corbu 907085, Constanța, Romania",
    "openMaps": "View on Google Maps"
  },
  "corbuFooter": {
    "rights": "© 2026 Corbu Beach Eco-Tourism Guide · All rights reserved.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "cookies": "Cookie Settings",
    "officialResourcesTitle": "Related Resources & Information",
    "disclaimer": "This website is an independent third-party travel information project promoting Leave No Trace and eco-protection. We are not affiliated with local governments or official institutions."
  },
  "privacy": {
    "title": "Privacy Policy",
    "lastUpdated": "Last updated: May 2026",
    "sections": [
      {
        "heading": "Information We Collect",
        "content": "We only collect the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited); Cookies and similar technologies; any information you voluntarily provide through contact forms or emails."
      },
      {
        "heading": "How We Use Your Information",
        "content": "We use the information we collect to: improve website content and user experience; analyze traffic and usage patterns; respond to inquiries; comply with our legal obligations."
      },
      {
        "heading": "Third-Party Services",
        "content": "Our website may use third-party services such as Google Maps (for embedded maps and location data), Google Analytics (for traffic analysis), and Unsplash (for images). These services have their own privacy policies."
      },
      {
        "heading": "Your Rights",
        "content": "Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data; request correction or deletion; object to processing; file a complaint with a supervisory authority."
      }
    ]
  },
  "terms": {
    "title": "Terms of Service",
    "lastUpdated": "Last updated: May 2026",
    "sections": [
      {
        "heading": "Access and Use",
        "content": "By accessing and using this website, you agree to be bound by these Terms of Service."
      },
      {
        "heading": "Content Use",
        "content": "All content on this website is for reference only. We are an independent third-party travel information website and are not affiliated with any tourist attractions, government agencies, or commercial operators."
      },
      {
        "heading": "Accuracy of Information",
        "content": "We strive to provide accurate and timely information, but cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please verify important information through official channels before traveling."
      },
      {
        "heading": "Intellectual Property",
        "content": "The design and original content of this website are copyright protected. Images are from Unsplash and used under license. Use of Google Maps data complies with Google's Terms of Service."
      },
      {
        "heading": "Limitation of Liability",
        "content": "This website is provided \"as is\" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions based on website content."
      }
    ]
  },
  "cookieSettings": {
    "title": "Cookie Settings",
    "description": "We use Cookies to improve your browsing experience. You can manage your preferences below.",
    "lastUpdated": "Last updated: May 2026",
    "essential": {
      "title": "Essential Cookies",
      "description": "These cookies are essential for the website to function properly and cannot be disabled.",
      "badge": "Always active"
    },
    "analytics": {
      "title": "Analytics Cookies",
      "description": "They help us understand how visitors interact with our website by collecting anonymous usage data.",
      "googleAnalytics": "Google Analytics",
      "analyticsDesc": "It collects anonymous information about how visitors use our website."
    },
    "preferences": {
      "title": "Preference Cookies",
      "description": "They remember your settings such as language and theme preferences.",
      "userPref": "User Preferences",
      "prefDesc": "Saves your language preference and website settings."
    },
    "marketing": {
      "title": "Marketing Cookies",
      "description": "They are used to display relevant ads and measure the effectiveness of ad campaigns.",
      "personalizedAds": "Personalized Ads",
      "marketingDesc": "It can show you relevant ads based on your interests."
    },
    "consentManagement": {
      "title": "Consent Management",
      "description": "You can change your cookie settings at any time. Note that disabling certain cookies may affect website functionality."
    },
    "save": "Save Preferences",
    "saved": "Preferences saved!",
    "declineAll": "Decline All"
  }
};

fs.writeFileSync(path.join(__dirname, 'src/messages/zh.json'), JSON.stringify(zhContent, null, 2));
fs.writeFileSync(path.join(__dirname, 'src/messages/en.json'), JSON.stringify(enContent, null, 2));
