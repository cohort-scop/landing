import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CONTACT_EMAIL, DEMO_URL, LINKEDIN } from './config';

export default function SiteFooter() {
  const t = useTranslations('footer');

  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <Link className="footer-brand" href="/">
          <Image
            className="brand-logo"
            src="/logo.png"
            alt=""
            width={26}
            height={26}
          />
          <span className="brand-name">cohortes</span>
        </Link>

        <div>
          <p className="footer-org">Cohortes</p>
          <p className="footer-lines">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span>{t('tagline')}</span>
          </p>
        </div>

        <div className="footer-cta">
          <div className="footer-social">
            <span className="footer-social-label">{t('follow')}</span>
            <a
              href={LINKEDIN.company}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
              </svg>
            </a>
          </div>
          <a
            className="btn btn-accent"
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('demo')}
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Cohortes. {t('rights')}
        </span>
        <nav className="footer-legal" aria-label={t('legalAriaLabel')}>
          <Link href="/mentions-legales">{t('legal')}</Link>
          <Link href="/cgv-cgu">{t('cgu')}</Link>
          <Link href="/confidentialite">{t('privacy')}</Link>
          <Link href="/confidentialite#cookies">{t('cookies')}</Link>
        </nav>
      </div>
    </footer>
  );
}
