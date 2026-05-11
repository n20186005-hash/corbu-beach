'use client';

import { useTranslations } from 'next-intl';

export default function CorbuBeachTickets() {
  const t = useTranslations('corbuTickets');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-6">
          {/* Free entry section */}
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {t('freeEntry.title')}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t('freeEntry.desc')}
                </p>
              </div>
            </div>
          </div>

          {/* ARBDD Fee section */}
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {t('arbdFee.title')}
                </h3>
                <p className="text-base mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t('arbdFee.desc')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-lg p-4" style={{ background: 'var(--bg-secondary)' }}>
                    <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{t('arbdFee.person')}</p>
                    <p className="font-semibold" style={{ color: 'var(--accent)' }}>{t('arbdFee.personPrice')}</p>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: 'var(--bg-secondary)' }}>
                    <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{t('arbdFee.vehicle')}</p>
                    <p className="font-semibold" style={{ color: 'var(--accent)' }}>{t('arbdFee.vehiclePrice')}</p>
                  </div>
                </div>

                <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
                  {t('arbdFee.note')}
                </p>
              </div>
            </div>
          </div>

          {/* Warning section */}
          <div
            className="rounded-xl p-6 sm:p-8 border-2 border-red-500/30"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold mb-2 text-red-500">
                  {t('warning.title')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span style={{ color: 'var(--text-secondary)' }}>{t('warning.noCamping')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span style={{ color: 'var(--text-secondary)' }}>{t('warning.noVehicles')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span style={{ color: 'var(--text-secondary)' }}>{t('warning.noFires')}</span>
                  </li>
                </ul>
                <p className="text-sm mt-3 font-medium" style={{ color: 'var(--accent)' }}>
                  {t('warning.fine')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
