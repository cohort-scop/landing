import { useTranslations } from 'next-intl';

const TARGETS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'] as const;
const PILLS = ['all', 'accused', 'target', 'witness', 'unclear', 'observed', 'noVerbatim'] as const;

/**
 * Le visuel de l'accueil : une fiche personne fictive (Michel B.) qui se dissout
 * vers le bas. Décoratif — masqué aux lecteurs d'écran, comme dans la maquette.
 */
export default function HeroPersonCard() {
  const t = useTranslations('home.card');
  const rich = { b: (chunks: React.ReactNode) => <b>{chunks}</b> };

  return (
    <div className="wrap hero-visual" aria-hidden="true">
      <div className="fp">
        <div className="fp-main">
          <p className="fp-crumb">
            {t('crumb1')} <span>›</span> {t('crumb2')} <span>›</span> {t('crumb3')}{' '}
            <span>›</span> {t('name')}
          </p>
          <div className="fp-head">
            <span className="fp-name">{t('name')}</span>
            <span className="fp-cluster">{t('cluster')}</span>
          </div>
          <p className="fp-note">{t('note')}</p>

          <div className="fp-stats">
            <div className="fp-stat">{t.rich('stat1', rich)}</div>
            <div className="fp-stat">{t.rich('stat2', rich)}</div>
            <div className="fp-stat">{t.rich('stat3', rich)}</div>
          </div>

          <div className="fp-pills">
            {PILLS.map((key, i) => (
              <span className={`fp-pill${i === 0 ? ' fp-pill-on' : ''}`} key={key}>
                {t(`pills.${key}`)}
              </span>
            ))}
          </div>

          <div className="fp-cols">
            <aside className="fp-side">
              <p className="fp-side-kicker">{t('sideKicker')}</p>
              <div className="fp-side-box">
                <p className="fp-side-title">{t('sideTitle')}</p>
                {TARGETS.map((key) => (
                  <p className="fp-target" key={key}>
                    <span>{t(`targets.${key}.who`)}</span>
                    <b>{t(`targets.${key}.n`)}</b>
                  </p>
                ))}
              </div>
            </aside>

            <div>
              <p className="fp-count">{t('count')}</p>

              <article className="fp-item">
                <span className="fp-year mono">2024</span>
                <div>
                  <p className="fp-item-head">
                    <span className="fp-badge">{t('badgeAccused')}</span>{' '}
                    {t('item1.head')}
                  </p>
                  <p className="fp-item-text">{t('item1.text')}</p>
                  <p className="fp-quote">{t('item1.quote')}</p>
                  <p className="fp-src mono">{t('item1.src')}</p>
                </div>
              </article>

              <article className="fp-item">
                <span className="fp-year mono">2024</span>
                <div>
                  <p className="fp-item-head">
                    <span className="fp-badge">{t('badgeAccused')}</span>{' '}
                    <span className="fp-badge fp-badge-soft">{t('badgeUnclear')}</span>{' '}
                    {t('item2.head')}
                  </p>
                  <p className="fp-item-text">{t('item2.text')}</p>
                  <p className="fp-quote">{t('item2.quote')}</p>
                  <p className="fp-src mono">{t('item2.src')}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
