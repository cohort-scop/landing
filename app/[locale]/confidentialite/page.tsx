import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CONTACT_EMAIL } from '@/components/site/config';
import { alternatesFor, openGraphFor } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'confidentialite.meta' });
  const title = t('title');
  const description = t('description');
  return {
    title: { absolute: title },
    description,
    alternates: alternatesFor(locale, '/confidentialite'),
    openGraph: openGraphFor(locale, title, description),
  };
}

export default async function ConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'confidentialite' });
  const strong = { strong: (chunks: React.ReactNode) => <strong>{chunks}</strong> };

  return (
    <div className="site-page">
      <section className="hero">
        <div className="wrap">
          <p className="hero-kicker">{t('hero.kicker')}</p>
          <h1 className="hero-title">{t('hero.title')}</h1>
        </div>
      </section>

      <div className="wrap">
        <section className="sec sec-first deco deco-intro reveal" id="cookies">
          <div className="sec-head">
            <h2 className="sec-title">{t('cookies.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t('cookies.lede')}</p>
            <p>{t.rich('cookies.a', strong)}</p>
            <p>{t.rich('cookies.b', strong)}</p>
            <p>{t.rich('cookies.c', strong)}</p>
          </div>
        </section>

        <section className="sec deco deco-marche reveal" id="donnees">
          <div className="sec-head">
            <h2 className="sec-title">{t('data.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t('data.a')}</p>
            <p>{t('data.b')}</p>
          </div>
        </section>

        <section className="sec reveal" id="droits">
          <div className="sec-head">
            <h2 className="sec-title">{t('rights.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t('rights.lede')}</p>
            <ul>
              {(['a', 'b', 'c', 'd'] as const).map((key) => (
                <li key={key}>{t(`rights.items.${key}`)}</li>
              ))}
            </ul>
            <p>
              {t('rights.a')}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </section>

        <section className="sec deco deco-produits reveal" id="contact">
          <div className="sec-head">
            <h2 className="sec-title">{t('contact.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>
              {t('contact.a')}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
