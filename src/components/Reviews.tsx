import { useTranslations } from 'next-intl';
export default function Reviews() {
  const t = useTranslations('reviews');
  return <section id="reviews" className="section-padding"><div className="max-w-5xl mx-auto">
    <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">{t('title')}</h2>
    <p className="leading-relaxed mb-6" style={{color:'var(--text-secondary)'}}>{t('declaration')}</p>
    <a href="https://maps.app.goo.gl/NAvHXzsTp3RxKvDk9" target="_blank" rel="noopener noreferrer" className="underline" style={{color:'var(--accent)'}}>{t('moreReviews')}</a>
  </div></section>;
}
