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
  const t = await getTranslations({ locale, namespace: 'mentionsLegales.meta' });
  const title = t('title');
  const description = t('description');
  return {
    title: { absolute: title },
    description,
    alternates: alternatesFor(locale, '/mentions-legales'),
    openGraph: openGraphFor(locale, title, description),
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'mentionsLegales' });
  const strong = { strong: (chunks: React.ReactNode) => <strong>{chunks}</strong> };
  const dpoRich = {
    ...strong,
    a: (chunks: React.ReactNode) => (
      <a href={`mailto:${CONTACT_EMAIL}`}>{chunks}</a>
    ),
  };

  return (
    <div className="site-page">
      <section className="hero">
        <div className="wrap">
          <p className="hero-kicker">{t('hero.kicker')}</p>
          <h1 className="hero-title">{t('hero.title')}</h1>
        </div>
      </section>

      <div className="wrap">
        <section className="sec sec-first deco deco-intro reveal" id="editeur">
          <div className="sec-head">
            <h2 className="sec-title">{t('editeur.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t.rich('editeur.a', strong)}</p>
            <p>{t.rich('editeur.b', strong)}</p>
          </div>
        </section>

        <section className="sec deco deco-marche reveal" id="contact">
          <div className="sec-head">
            <h2 className="sec-title">{t('contact.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t('contact.a')}{' '}<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
        </section>

        <section className="sec reveal" id="hebergement">
          <div className="sec-head">
            <h2 className="sec-title">{t('hebergement.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t.rich('hebergement.vitrine', strong)}</p>
            <p>{t.rich('hebergement.app', strong)}</p>
          </div>
        </section>

        <section className="sec deco deco-produits reveal" id="dpo">
          <div className="sec-head">
            <h2 className="sec-title">{t('dpo.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t.rich('dpo.a', dpoRich)} {CONTACT_EMAIL}</p>
            <p>{t('dpo.b')}</p>
          </div>
        </section>

        <section className="sec reveal" id="propriete">
          <div className="sec-head">
            <h2 className="sec-title">{t('propriete.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t('propriete.a')}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
