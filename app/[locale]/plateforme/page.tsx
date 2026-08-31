import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import PlatformProcess from '@/components/site/PlatformProcess';
import { CONTACT_EMAIL } from '@/components/site/config';
import { alternatesFor, openGraphFor } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'plateforme.meta' });
  const title = t('title');
  const description = t('description');
  return {
    title: { absolute: title },
    description,
    alternates: alternatesFor(locale, '/plateforme'),
    openGraph: openGraphFor(locale, title, description),
  };
}

export default function PlateformePage() {
  const t = useTranslations('plateforme');
  const rich = { strong: (chunks: React.ReactNode) => <strong>{chunks}</strong> };

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
        <section className="sec sec-first deco deco-intro reveal" id="principe">
          <div className="sec-head">
            <h2 className="sec-title">{t('principle.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t.rich('principle.text', rich)}</p>
          </div>
        </section>

        <section className="sec reveal" id="deroule">
          <div className="sec-head">
            <h2 className="sec-title">{t('process.title')}</h2>
          </div>
          <PlatformProcess />
        </section>

        <section className="sec deco deco-pour-qui reveal" id="pour-qui">
          <div className="sec-head">
            <h2 className="sec-title">{t('audience.title')}</h2>
          </div>
          <div className="who">
            <div className="who-col">
              <h3>{t('audience.work.title')}</h3>
              <ul>
                <li>{t('audience.work.a')}</li>
                <li>{t('audience.work.b')}</li>
                <li>{t('audience.work.c')}</li>
                <li>{t('audience.work.d')}</li>
              </ul>
            </div>
            <div className="who-col">
              <h3>{t('audience.participation.title')}</h3>
              <ul>
                <li>{t('audience.participation.a')}</li>
                <li>{t('audience.participation.b')}</li>
                <li>{t('audience.participation.c')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sec deco deco-statut reveal" id="statut">
          <div className="sec-head">
            <h2 className="sec-title">{t('status.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t.rich('status.text', rich)}</p>
            <p>
              {t.rich('status.more', {
                a: (chunks) => <Link href="/about">{chunks}</Link>,
              })}
            </p>
          </div>
        </section>

        <div className="outro reveal" id="demo">
          <h2>{t('outro.title')}</h2>
          <p>{t('outro.text')}</p>
          <div className="outro-actions">
            <a className="btn btn-accent-lg" href={`mailto:${CONTACT_EMAIL}`}>
              {t('outro.cta')}
            </a>
            <span className="outro-alt">{CONTACT_EMAIL}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
