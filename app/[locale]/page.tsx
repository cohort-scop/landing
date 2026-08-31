import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import HeroPersonCard from '@/components/site/HeroPersonCard';
import ProofBand from '@/components/site/ProofBand';
import InvestigationWalkthrough from '@/components/site/InvestigationWalkthrough';
import { DEMO_URL } from '@/components/site/config';
import { alternatesFor, openGraphFor } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });
  const title = t('title');
  const description = t('description');
  return {
    title: { absolute: title },
    description,
    alternates: alternatesFor(locale, ''),
    openGraph: openGraphFor(locale, title, description),
  };
}

export default function HomePage() {
  const t = useTranslations('home');
  const p = useTranslations('products');

  return (
    <div className="site-page site-page-flush">
      <section className="hero hero-home">
        <div className="wrap">
          <p className="hero-kicker">{t('hero.kicker')}</p>
          <p className="hero-title">{t('hero.statement')}</p>
          {/* Le `h1` n'est volontairement pas le plus gros texte de la page. */}
          <h1 className="hero-lede">{t('hero.h1')}</h1>
          <p className="hero-lede">{t('hero.lede')}</p>
          <div className="hero-actions">
            <a className="btn btn-ink" href="#enquete">
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </section>

      <HeroPersonCard />

      <ProofBand />

      <section className="parcours" id="enquete">
        <div className="wrap">
          <InvestigationWalkthrough trailingArrow />

          <div className="outro outro-bleed reveal" id="demo">
            <div className="wrap">
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
              </div>
            </div>
          </div>

          <section className="ai reveal" id="ia">
            <h2 className="ai-title">{t('ai.title')}</h2>
            <p className="ai-lede">
              {t.rich('ai.lede', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <div className="ai-grid">
              {(['models', 'retention', 'anonymised'] as const).map((key) => (
                <div className="ai-card" key={key}>
                  <h3>{t(`ai.${key}.title`)}</h3>
                  <p>{t(`ai.${key}.text`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="products reveal" id="produits">
            <div className="wrap">
              <h2 className="products-title">{t('products.title')}</h2>
              <p className="products-lede">{t('products.lede')}</p>
              <div className="products-actions">
                <Link className="product-btn" href="/enquete">
                  <span className="product-btn-name">{p('enquete.short')}</span>
                  <span className="product-btn-desc">{p('enquete.desc')}</span>
                </Link>
                <Link className="product-btn" href="/plateforme">
                  <span className="product-btn-name">{p('plateforme.short')}</span>
                  <span className="product-btn-desc">{p('plateforme.desc')}</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
