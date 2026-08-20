import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { AD_CONSEIL_URL, CONTACT_EMAIL, LINKEDIN } from '@/components/site/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about.meta' });
  return { title: t('title') };
}

const TEAM = [
  {
    key: 'roberto',
    name: 'Roberto Barros De Sousa',
    image: '/images/about/roberto.png',
    width: 389,
    height: 389,
    email: CONTACT_EMAIL,
    linkedin: LINKEDIN.roberto,
  },
  {
    key: 'fadi',
    name: 'Fadi Joseph Lahiani',
    image: '/images/about/fadi.webp',
    width: 224,
    height: 224,
    email: null,
    linkedin: LINKEDIN.fadi,
  },
  {
    key: 'louise',
    name: 'Louise Naudin',
    image: '/images/about/louise.png',
    width: 800,
    height: 800,
    email: null,
    linkedin: LINKEDIN.louise,
  },
] as const;

export default function AboutPage() {
  const t = useTranslations('about');
  const p = useTranslations('products');
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
        <section className="sec sec-first deco deco-intro reveal" id="origine">
          <div className="sec-head">
            <h2 className="sec-title">{t('origin.title')}</h2>
          </div>
          <div className="sec-prose">
            {(['a', 'b', 'c', 'd', 'e'] as const).map((key) => (
              <p key={key}>{t.rich(`origin.${key}`, strong)}</p>
            ))}
          </div>
        </section>

        <section className="sec deco deco-marche reveal" id="marche">
          <div className="sec-head">
            <h2 className="sec-title">{t('market.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t.rich('market.a', strong)}</p>
            <p>{t.rich('market.b', strong)}</p>
            <p>
              {t.rich('market.c', {
                ...strong,
                a: (chunks) => (
                  <a href={AD_CONSEIL_URL} target="_blank" rel="noopener noreferrer">
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </section>

        <section className="sec reveal" id="equipe">
          <div className="sec-head">
            <h2 className="sec-title">{t('team.title')}</h2>
          </div>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div className="person" key={member.key}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={member.width}
                  height={member.height}
                  sizes="84px"
                />
                <div>
                  <p className="person-name">{member.name}</p>
                  <p className="person-role">{t(`team.${member.key}`)}</p>
                  <p className="person-links">
                    {member.email && <a href={`mailto:${member.email}`}>{member.email}</a>}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec deco deco-produits reveal" id="produits">
          <div className="sec-head">
            <h2 className="sec-title">{t('build.title')}</h2>
          </div>
          <div className="sec-prose">
            <p>{t('build.lede')}</p>
          </div>

          <h3 className="sub-title">{p('enquete.name')}</h3>
          <div className="cards">
            {(['a', 'b', 'c'] as const).map((key) => (
              <div className="card" key={key}>
                <h3>{t(`build.enquete.${key}.title`)}</h3>
                <p>{t(`build.enquete.${key}.text`)}</p>
              </div>
            ))}
          </div>
          <p className="more">
            <Link className="more-link" href="/enquete">
              {t('build.enquete.cta')}
            </Link>
          </p>

          <h3 className="sub-title">{p('plateforme.name')}</h3>
          <div className="cards">
            {(['a', 'b', 'c'] as const).map((key) => (
              <div className="card" key={key}>
                <h3>{t(`build.plateforme.${key}.title`)}</h3>
                <p>{t(`build.plateforme.${key}.text`)}</p>
              </div>
            ))}
          </div>
          <p className="more">
            <Link className="more-link" href="/plateforme">
              {t('build.plateforme.cta')}
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
