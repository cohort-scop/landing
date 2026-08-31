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
  const t = await getTranslations({ locale, namespace: 'cgvCgu.meta' });
  const title = t('title');
  const description = t('description');
  return {
    title: { absolute: title },
    description,
    alternates: alternatesFor(locale, '/cgv-cgu'),
    openGraph: openGraphFor(locale, title, description),
  };
}

export default async function CgvCguPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cgvCgu' });
  const strong = { strong: (chunks: React.ReactNode) => <strong>{chunks}</strong> };
  const rich = {
    ...strong,
    a: (chunks: React.ReactNode) => (
      <a href={`mailto:${CONTACT_EMAIL}`}>{chunks}</a>
    ),
  };

  const sections = [
    { id: 'preamble', key: 'preamble' },
    { id: 'objet', key: 'objet' },
    { id: 'exploitant', key: 'exploitant' },
    { id: 'acces', key: 'acces' },
    { id: 'compte', key: 'compte' },
    { id: 'obligations', key: 'obligations' },
    { id: 'interdits', key: 'interdits' },
    { id: 'sanctions', key: 'sanctions' },
    { id: 'responsabilite', key: 'responsabilite' },
    { id: 'propriete', key: 'propriete' },
    { id: 'donnees', key: 'donnees' },
    { id: 'duree', key: 'duree' },
    { id: 'modifications', key: 'modifications' },
    { id: 'loi', key: 'loi' },
  ] as const;

  return (
    <div className="site-page">
      <section className="hero">
        <div className="wrap">
          <p className="hero-kicker">{t('hero.kicker')}</p>
          <h1 className="hero-title">{t('hero.title')}</h1>
        </div>
      </section>

      <div className="wrap">
        {sections.map((section, i) => {
          // La clé « a » existe partout ; les clés b/c existent sur certaines.
          return (
            <section
              className={`sec${i === 0 ? ' sec-first deco deco-intro' : ''} reveal`}
              id={section.id}
              key={section.id}
            >
              <div className="sec-head">
                <h2 className="sec-title">{t(`${section.key}.title`)}</h2>
              </div>
              <div className="sec-prose">
                <p>{t.rich(`${section.key}.a`, rich)}</p>
                {t.has(`${section.key}.b`) && <p>{t.rich(`${section.key}.b`, rich)}</p>}
                {t.has(`${section.key}.c`) && <p>{t.rich(`${section.key}.c`, rich)}</p>}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
