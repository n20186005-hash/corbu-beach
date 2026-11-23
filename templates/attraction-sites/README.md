# 拓页 · 景点站模板 v1

`home/layout.html` 直接提取自卢森堡市立公园生产首页，`guide/layout.html` 直接提取自瓦杜海滩生产内页。两份布局均保留对应响应式类、内容容器、卡片与标题层级。各自的 `theme.css` 是同次页面请求引用的 CSS，已移除外部字体请求。文字、图片属性、地图及来源链接已替换为分区字段。读取这份仓库目录即可作业。

| 用途 | 原版与分区顺序 |
|---|---|
| 首页 | Hero → 探索、建议、特色与关于 → 基础信息 → 时间 → 门票 → 交通 → 历史与体验 → 编号路线 → 机位 → 住宿 → 图集 → 评价 → 地址地图 |
| 独立景点页 | Hero → 探索与建议 → 管理主体与地点性质 → 基础资料 → 时间、票价及交通 → 历史与体验 → 编号路线 → 须知与机位 → 实景图 → 住宿 → FAQ → 评价与地图 → 来源 → 周边指南 |

## 离线预览

在本目录运行以下命令。仅需 Python 3 标准库。生成的 HTML 可直接双击打开。参考预览使用空白图位、空地图和示例索引策略。查看色调、卡片、间距与断点时无需安装 Node 或联网。

```sh
python3 render.py home home/reference.json preview/home.html --example
python3 render.py guide guide/reference.json preview/guide.html --example
```

## 接入新仓库

1. 在目标仓库使用独立数据集。运行 `python3 init.py guide data/place.zh.json --lang zh-Hant` 可建空白景点资料文件。首页使用 `home`。参考文件的同名键说明各槽位在原版中的用途。按来源拍摄或取得当地图片，填写目标景点自己的地图、地址、管理方、开放和票务条件、评价来源及核对日期。
2. `sections` 指定显示的分区与顺序。新建景点默认将管理主体紧接首屏。已有配置可将 `management` 放到 `hero` 后。某分区没有有效资料可移出 `sections`。照片用 photos 数组自动绘制。每项填写 src、alt、credit 和 source，标题用 photoHeading。零张照片时填写 photoFallback；首图为空时使用无图占位。FAQ 或路线步骤可在对应 HTML 片段和数据映射中增减。不同目标站共用样式与页面结构，每个地点单独维护事实。
3. 用 `python3 render.py guide data/place.zh.json public/zh/guides/example/index.html` 可生成正式静态页面。多语站每个 locale 用一份数据，沿用目标站的链接策略、导航、页脚、互译链接、结构化数据及 sitemap。现有 Astro/Next 项目也可将对应分区移植到现有组件并直接绑定站内数据集合。
4. 页面的 `nearby` 数组支持任意数量的站内链接。每项使用 `{"label":"景点名","path":"/zh/guides/地点/"}`，栏目标题使用 `nearbyHeading`。现有组件已提供周边入口的项目，可直接循环同一景点集合。相册轮播、主题切换、导航、地图同意管理等互动沿用宿主组件。示例 HTML 只导出正文。
5. 全页保留一个 H1，检查全部实际语种、地图搜索对象、图片署名、二级页的管理范围、移动端和桌面端。首页原照片继续使用原路径。与 `reference.json` 相同的地点事实只适用于原景点。生产导出需要单独的数据文件。

## 提取依据

提取于 2026-11-23。两个网址的原始 HTTP 响应均为 200，默认响应的文档语言均为 zh-CN。首页线上结构与可取到的 GitHub 首页组件顺序有差异，模板以生产 HTML 和同一响应的样式文件为准。原仓库可用于对照数据模型和交互。

| 页面 | 生产源 | 对照版本 | CSS 资源 |
|---|---|---|---|
| 首页 | https://www.parcmunicipaldeluxembourg.com/ | n20186005-hash/parc-municipal-de-luxembourg @ fcf92dc5f913a753bcbc4f6bec5fcf5b1a8fd7d2 | 45ed17df7bfecc3a.css |
| 景点页 | https://corbubeach.com/guides/vadu-beach | n20186005-hash/corbu-beach @ 28c3e31c7e322665e44c9a90d4b95103094376ff | 3959dedb5f82f5d6.css |
