'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

const STEPS = [1, 2, 3, 4, 5] as const;

/**
 * « Comment ça se passe » : cinq étapes à droite, un écran par étape à gauche,
 * collant au scroll. L'étape active s'allume au passage du scroll et au survol ;
 * l'écran correspondant remplace le précédent.
 */
export default function PlatformProcess() {
  const t = useTranslations('plateforme.process');
  const [active, setActive] = useState(1);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const n = Number((entry.target as HTMLElement).dataset.step);
          if (n) setActive(n);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const mock = (n: number, children: React.ReactNode) => (
    <div
      className={`mock${active === n ? ' is-on' : ''}`}
      key={n}
      aria-hidden={active === n ? undefined : true}
    >
      <div className="mock-bar">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
      </div>
      {children}
    </div>
  );

  return (
    <div className="process">
      <div className="process-visual">
        {/* 1 — les collectifs */}
        {mock(
          1,
          <div className="mock-body">
            <p className="mock-crumb">
              {t('m1.crumb1')} <span>›</span> {t('m1.crumb2')}
            </p>
            <div className="mock-head">
              <span className="mock-title">{t('m1.title')}</span>
              <span className="mock-btn">{t('m1.cta')}</span>
            </div>
            <div className="mlist">
              {(['a', 'b', 'c', 'd'] as const).map((key) => (
                <div className="mrow" key={key}>
                  <span>{t(`m1.${key}.name`)}</span>
                  <b>{t(`m1.${key}.members`)}</b>
                </div>
              ))}
            </div>
            <p className="mock-text">{t('m1.note')}</p>
          </div>,
        )}

        {/* 2 — témoigner */}
        {mock(
          2,
          <div className="mock-body mvoice">
            <p className="mock-crumb">
              {t('m2.crumb1')} <span>›</span> {t('m2.crumb2')} <span>›</span> {t('m2.crumb3')}
            </p>
            <p className="mv-title">{t('m2.title')}</p>
            <p className="mv-sub">{t('m2.sub')}</p>
            <div className="mv-choice">
              <span className="mv-on">{t('m2.voice')}</span>
              <span>{t('m2.text')}</span>
            </div>
            <div className="mmic" aria-hidden="true">
              ●
            </div>
            <p className="mv-sub">{t('m2.hint')}</p>
            <p className="mv-foot">{t('m2.foot')}</p>
          </div>,
        )}

        {/* 3 — les questions du collectif */}
        {mock(
          3,
          <div className="mock-body">
            <p className="mock-crumb">
              {t('m3.crumb1')} <span>›</span> {t('m3.crumb2')} <span>›</span> {t('m3.crumb3')}
            </p>
            <div className="mock-head">
              <span className="mock-title">{t('m3.title')}</span>
              <span className="mock-btn">{t('m3.cta')}</span>
            </div>
            <p className="mock-text">{t('m3.note')}</p>
            <div className="qcards">
              {(['a', 'b', 'c'] as const).map((key) => (
                <div className="qcard" key={key}>
                  <p>{t(`m3.${key}.q`)}</p>
                  <span className="qmeta">{t(`m3.${key}.meta`)}</span>
                </div>
              ))}
            </div>
          </div>,
        )}

        {/* 4 — les thèmes */}
        {mock(
          4,
          <div className="mock-body">
            <p className="mock-crumb">
              {t('m4.crumb1')} <span>›</span> {t('m4.crumb2')} <span>›</span> {t('m4.crumb3')}
            </p>
            <div className="mcols">
              <div className="mthemes">
                <p className="mthemes-h">{t('m4.count')}</p>
                <p className="mtheme">{t('m4.t1')}</p>
                <p className="mtheme mtheme-on">{t('m4.t2')}</p>
                <p className="mtheme">{t('m4.t3')}</p>
                <p className="mtheme">{t('m4.t4')}</p>
                <p className="mtheme">{t('m4.t5')}</p>
              </div>
              <div>
                <p className="mock-text" style={{ marginTop: 0 }}>
                  {t('m4.presence')}
                </p>
                <div className="mchips">
                  {(
                    [
                      ['S39', false],
                      ['S40', false],
                      ['S41', true],
                      ['S42', true],
                      ['S43', true],
                      ['S44', false],
                      ['S45', true],
                    ] as const
                  ).map(([label, on]) => (
                    <span className={`mchip${on ? ' mchip-on' : ''}`} key={label}>
                      {label}
                    </span>
                  ))}
                </div>
                <p className="mnote">{t('m4.weeks')}</p>
                <p className="mtheme-t">{t('m4.t2')}</p>
                <p className="mock-text">{t('m4.summary')}</p>
              </div>
            </div>
          </div>,
        )}

        {/* 5 — les réponses de la semaine */}
        {mock(
          5,
          <div className="mock-body">
            <p className="mock-crumb">
              {t('m5.crumb1')} <span>›</span> {t('m5.crumb2')} <span>›</span> {t('m5.crumb3')}
            </p>
            <div className="mock-head">
              <span className="mock-title">{t('m5.week')}</span>
              <span className="qmeta">{t('m5.count')}</span>
            </div>
            <div className="qcards">
              {(['a', 'b'] as const).map((key) => (
                <div className="qcard" key={key}>
                  <p>
                    <b>{t(`m5.${key}.q`)}</b>
                  </p>
                  <p className="manswer">{t(`m5.${key}.a`)}</p>
                  <span className="qmeta">{t(`m5.${key}.trend`)}</span>
                </div>
              ))}
            </div>
          </div>,
        )}
      </div>

      <div className="process-steps">
        {STEPS.map((n, i) => (
          <div
            className={`step-row${active === n ? ' is-on' : ''}`}
            key={n}
            data-step={n}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            onMouseEnter={() => setActive(n)}
          >
            <span className="step-n">{n}</span>
            <div>
              <h3>{t(`s${n}.title`)}</h3>
              <p>{t(`s${n}.text`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
