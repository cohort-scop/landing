import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import InvestigationWalkthrough from '@/components/site/InvestigationWalkthrough';
import { CONTACT_EMAIL, DEMO_URL, OVH_AI_ENDPOINTS_URL } from '@/components/site/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'enquete.meta' });
  return { title: t('title'), description: t('description') };
}

export default function EnquetePage() {
  const t = useTranslations('enquete');

  return (
    <div className="site-page">
      <section className="hero">
        <div className="wrap">
          <p className="hero-kicker">{t('hero.kicker')}</p>
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-lede">{t('hero.lede')}</p>
        </div>
      </section>

      <div className="wrap">
        <section className="sec sec-first reveal" id="missions">
          <div className="sec-head">
            <h2 className="sec-title">{t('missions.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t('missions.text')}</p>
          </div>
        </section>

        <section className="parcours" id="deroule">
          <InvestigationWalkthrough />
        </section>

        <section className="sec reveal" id="confiance">
          <div className="sec-head">
            <h2 className="sec-title">{t('privacy.title')}</h2>
          </div>
          <ul className="facts">
            <li>
              {t.rich('privacy.anonymisation', {
                b: (chunks) => <b>{chunks}</b>,
              })}
            </li>
            <li>
              {t.rich('privacy.retention', {
                b: (chunks) => <b>{chunks}</b>,
                a: (chunks) => (
                  <a href={OVH_AI_ENDPOINTS_URL} target="_blank" rel="noopener noreferrer">
                    {chunks}
                  </a>
                ),
              })}
            </li>
          </ul>
        </section>

        <div className="outro reveal" id="demo">
          <h2>{t('outro.title')}</h2>
          <p>{t('outro.text')}</p>
          <div className="outro-actions">
            <a
              className="btn btn-accent-lg"
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('outro.cta')}
            </a>
            <span className="outro-alt">
              {t('outro.or')} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
