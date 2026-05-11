'use client';

import { useTranslations } from 'next-intl';

export default function CorbuBeachTransport() {
  const t = useTranslations('corbuTransport');

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CND Airport */}
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 2L2 22"/>
                  <path d="M17 7l-5 5-3-3-5 5"/>
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('nearestAirport')}
              </h3>
            </div>
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>
              {t('cndAirport')}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('cndDesc')}
            </p>
          </div>

          {/* OTP Airport */}
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 2L2 22"/>
                  <path d="M17 7l-5 5-3-3-5 5"/>
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('mainHub')}
              </h3>
            </div>
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>
              {t('otpAirport')}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('otpDesc')}
            </p>
          </div>

          {/* Self Drive */}
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="5" cy="17" r="3"/>
                  <circle cx="19" cy="17" r="3"/>
                  <path d="M8.5 17h-2A2 2 0 1 0 5 15a2 2 0 0 0 2 2h.5"/>
                  <path d="M2 13h6l3 4 4-8h4"/>
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('selfDrive')}
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('selfDriveDesc')}
            </p>
          </div>

          {/* Public Transport */}
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="4" y="3" width="16" height="16" rx="2"/>
                  <path d="M4 11h16"/>
                  <path d="M12 3v8"/>
                  <circle cx="8" cy="15" r="1"/>
                  <circle cx="16" cy="15" r="1"/>
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('publicTransit')}
              </h3>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('publicTransitDesc')}
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div
          className="mt-6 rounded-xl p-6 sm:p-8 border border-amber-500/30"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {t('parkingNotice.title')}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('parkingNotice.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
