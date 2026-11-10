import { useLocale } from 'next-intl';
export default function SourceNotes() {
 const zh = useLocale() === 'zh';
 return <section className="section-padding"><div className="max-w-4xl mx-auto guide-content">
  <h2>{zh ? '资料来源与核对日期' : 'Sources and review date'}</h2>
  <p>{zh ? '编辑：Corbu Beach Travel Guide。核对日期：2026年11月10日。开放、许可与服务可能变化，请在出发前复核。' : 'Edited by Corbu Beach Travel Guide. Checked 10 November 2026. Access, permits and services can change; recheck before departure.'}</p>
  <ul><li><a href="https://permise.ddbra.ro/" target="_blank" rel="noopener noreferrer">ARBDD — {zh ? '官方许可产品与豁免说明' : 'official permit products and exemptions'}</a></li>
  <li><a href="https://ddbra.ro/" target="_blank" rel="noopener noreferrer">ARBDD — {zh ? '保护区最新消息与指引' : 'reserve news and guidance'}</a></li>
  <li><a href="https://www.radioconstanta.ro/2025/08/20/actiuni-de-control-pe-plajele-salbatice-vadu-si-corbu-si-pe-traseele-turistice-din-delta/" target="_blank" rel="noopener noreferrer">Radio Constanța — {zh ? '2025年8月20日引述ARBDD的保护区报道' : '20 August 2025 report quoting ARBDD'}</a></li>
  <li><a href="https://maps.app.goo.gl/NAvHXzsTp3RxKvDk9" target="_blank" rel="noopener noreferrer">Google Maps — {zh ? '地点、评分及显示时间的第三方快照' : 'third-party place, rating and displayed-hours snapshot'}</a></li></ul>
 </div></section>;
}
