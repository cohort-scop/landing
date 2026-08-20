'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

/** Flèche pointillée entre deux écrans — masquée sous 900 px par la CSS. */
function Arrow({ variant }: { variant: 'rl' | 'lr' | 'lr-4' }) {
  const long = variant === 'lr-4';
  return (
    <div
      className={`link ${long ? 'link-lr link-4' : variant === 'rl' ? 'link-rl' : 'link-lr'}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 520 152">
        <path
          className="link-line"
          d={
            long
              ? 'M502 8c-4 28-23 40-63 51-52 14-92 13-146 27-46 12-80 30-122 38-26 14-46 30-52 71'
              : 'M502 8c-4 28-23 40-63 51-52 14-92 13-146 27-46 12-80 30-122 38-30 10-56 16-95 22'
          }
        />
        <path
          className="link-tip"
          d={long ? 'M119 195l-6-25M119 195l13-22' : 'M76 146l23-12M76 146l25 5'}
        />
      </svg>
    </div>
  );
}

function AppBar({ path }: { path: string }) {
  return (
    <div className="app-bar">
      <span className="app-dot" aria-hidden="true" />
      <span className="app-dot" aria-hidden="true" />
      <span className="app-dot" aria-hidden="true" />
      <span className="app-path mono">{path}</span>
    </div>
  );
}

function Loss({ label, text }: { label: string; text: string }) {
  return (
    <div className="step-loss">
      <span className="step-loss-label">{label}</span>
      <p>{text}</p>
    </div>
  );
}

type Props = {
  /** L'accueil ajoute une flèche après la cinquième étape, vers le bloc sombre. */
  trailingArrow?: boolean;
};

/**
 * Le déroulé d'une enquête en cinq étapes, partagé par l'accueil et la page
 * « logiciel d'enquête ». Le bouton de l'étape 1 lance le traitement de
 * l'étape 2 ; à défaut, il démarre seul quand la section entre dans le champ.
 */
export default function InvestigationWalkthrough({ trailingArrow = false }: Props) {
  const t = useTranslations('walkthrough');
  const [running, setRunning] = useState(false);
  const [launched, setLaunched] = useState(false);
  const pipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (running) return;
    const pipe = pipeRef.current;
    if (!pipe) return;

    if (!('IntersectionObserver' in window)) {
      setRunning(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setRunning(true);
          observer.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(pipe);
    return () => observer.disconnect();
  }, [running]);

  const launch = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setLaunched(true);
    setRunning(true);
    document.getElementById('traitement')?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  const rich = { b: (chunks: React.ReactNode) => <b>{chunks}</b> };

  return (
    <>
      <div className="parcours-head">
        <h2 className="parcours-title">{t('title')}</h2>
        <p className="parcours-lede">{t('lede')}</p>
      </div>

      {/* 1 — l'import ------------------------------------------------- */}
      <article className="step reveal">
        <div className="step-grid">
          <div>
            <p className="step-num">{t('step1.num')}</p>
            <h3 className="step-title">{t('step1.title')}</h3>
            <p className="step-text">{t('step1.text')}</p>
            <Loss label={t('lossLabel')} text={t('step1.loss')} />
          </div>
          <div className="app">
            <AppBar path={t('step1.screen.path')} />
            <div className="app-body">
              <div className="drop">
                <div className="drop-icon" aria-hidden="true">
                  ↑
                </div>
                <div className="drop-file mono">
                  {t('step1.screen.file')} <span>{t('step1.screen.count')}</span>
                </div>
                <p className="drop-note">{t('step1.screen.column')}</p>
              </div>
              <div className="app-action">
                <button
                  className="btn btn-app"
                  type="button"
                  onClick={launch}
                  disabled={launched}
                >
                  {launched ? t('step1.screen.ctaDone') : t('step1.screen.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Arrow variant="rl" />

      {/* 2 — le traitement -------------------------------------------- */}
      <article className="step reveal" id="traitement">
        <div className="step-grid">
          <div>
            <p className="step-num">{t('step2.num')}</p>
            <h3 className="step-title">{t('step2.title')}</h3>
            <Loss label={t('lossLabel')} text={t('step2.loss')} />
          </div>
          <div className="app">
            <AppBar path={t('step2.screen.path')} />
            <div className={`app-body${running ? ' running' : ''}`}>
              <div className="pipe" ref={pipeRef}>
                {(['anonymisation', 'resume', 'categorisation', 'extraction'] as const).map(
                  (key) => (
                    <div className="pipe-row" key={key}>
                      <span className="pipe-check" aria-hidden="true">
                        ✓
                      </span>
                      <span className="pipe-label">
                        {t(`step2.screen.${key}.label`)}
                        <small>{t(`step2.screen.${key}.sub`)}</small>
                      </span>
                      <span className="pipe-track">
                        <i className="pipe-fill" />
                      </span>
                    </div>
                  ),
                )}
              </div>
              <p className="pipe-done">{t('step2.screen.done')}</p>
            </div>
          </div>
        </div>
      </article>

      <Arrow variant="lr" />

      {/* 3 — la lecture ----------------------------------------------- */}
      <article className="step reveal">
        <div className="step-grid">
          <div>
            <p className="step-num">{t('step3.num')}</p>
            <h3 className="step-title">{t('step3.title')}</h3>
            <p className="step-text">{t('step3.text')}</p>
            <Loss label={t('lossLabel')} text={t('step3.loss')} />
          </div>
          <div className="app">
            <AppBar path={t('step3.screen.path')} />
            <div className="app-body">
              <div className="filters">
                <span className="chip chip-on">{t('step3.screen.filterFamily')}</span>
                <span className="chip chip-on">{t('step3.screen.filterPeriod')}</span>
                <span className="chip">{t('step3.screen.filterCategory')}</span>
                <span className="chip">{t('step3.screen.filterPerson')}</span>
                <span className="chip">{t('step3.screen.filterDated')}</span>
              </div>
              <div className="rows">
                {(
                  [
                    ['a', 3],
                    ['b', 2],
                    ['c', 3],
                  ] as const
                ).map(([key, tags]) => (
                  <div className="row" key={key}>
                    <div className="row-top">
                      <span className="row-who">{t(`step3.screen.${key}.who`)}</span>
                      <span className="mono">{t(`step3.screen.${key}.ref`)}</span>
                      <span className="mono">{t(`step3.screen.${key}.date`)}</span>
                    </div>
                    <p className="row-text">{t(`step3.screen.${key}.text`)}</p>
                    <div className="row-tags">
                      {Array.from({ length: tags }, (_, i) => (
                        <span className="tag" key={i}>
                          {t(`step3.screen.${key}.tag${i + 1}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Arrow variant="rl" />

      {/* 4 — la catégorisation ---------------------------------------- */}
      <article className="step reveal">
        <div className="step-grid">
          <div>
            <p className="step-num">{t('step4.num')}</p>
            <h3 className="step-title">{t('step4.title')}</h3>
            <ul className="step-list">
              <li>{t.rich('step4.inductive', rich)}</li>
              <li>{t.rich('step4.manual', rich)}</li>
              <li>{t.rich('step4.preset', rich)}</li>
            </ul>
            <Loss label={t('lossLabel')} text={t('step4.loss')} />
          </div>
          <div className="app">
            <AppBar path={t('step4.screen.path')} />
            <div className="app-body">
              <div className="cat-head mono">{t('step4.screen.source')}</div>
              <div className="row-tags">
                <span className="tag">{t('step4.screen.tag1')}</span>
                <span className="tag">
                  {t('step4.screen.tag2')}{' '}
                  <b className="tag-x" aria-hidden="true">
                    ×
                  </b>
                </span>
                <span className="tag">{t('step4.screen.tag3')}</span>
                <span className="chip chip-add">{t('step4.screen.add')}</span>
              </div>
              <p className="cat-note">{t('step4.screen.note')}</p>

              <p className="cat-sep">{t('step4.screen.inductiveTitle')}</p>
              <div className="themes">
                {(
                  [
                    ['a', '78%'],
                    ['b', '52%'],
                    ['c', '41%'],
                  ] as const
                ).map(([key, width]) => (
                  <div className="theme" key={key}>
                    <span className="theme-label">{t(`step4.screen.${key}.label`)}</span>
                    <span className="theme-bar">
                      <i style={{ width }} />
                    </span>
                    <span className="theme-n mono">{t(`step4.screen.${key}.n`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Arrow variant="lr-4" />

      {/* 5 — la chronologie ------------------------------------------- */}
      <article className="step reveal">
        <div className="step-grid">
          <div>
            <p className="step-num">{t('step5.num')}</p>
            <h3 className="step-title">{t('step5.title')}</h3>
            <p className="step-text">{t('step5.text')}</p>
            <Loss label={t('lossLabel')} text={t('step5.loss')} />
          </div>
          <div className="app">
            <AppBar path={t('step5.screen.path')} />
            <div className="app-body">
              <div className="fiche-head">
                <span className="fiche-name">{t('step5.screen.name')}</span>
                <span className="fiche-meta mono">{t('step5.screen.meta')}</span>
              </div>
              <div className="tl">
                {(['a', 'b', 'c'] as const).map((key) => (
                  <div className="tl-item" key={key}>
                    <p className="tl-date mono">{t(`step5.screen.${key}.date`)}</p>
                    <p className="tl-what">{t(`step5.screen.${key}.what`)}</p>
                    <p className="tl-quote">{t(`step5.screen.${key}.quote`)}</p>
                    <span className="tl-src mono">{t(`step5.screen.${key}.src`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {trailingArrow && <Arrow variant="rl" />}
    </>
  );
}
