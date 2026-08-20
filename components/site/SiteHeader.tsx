'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { DEMO_URL } from './config';

export default function SiteHeader() {
  const t = useTranslations('nav');
  const p = useTranslations('products');
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'fr' ? 'en' : 'fr';

  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Le menu se referme au clic ailleurs, comme dans les maquettes.
  useEffect(() => {
    if (!open) return;
    const onDocumentClick = (event: MouseEvent) => {
      if (!dropRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  // …et au changement de page.
  useEffect(() => setOpen(false), [pathname]);

  const current = (href: string) =>
    pathname === href ? ('page' as const) : undefined;

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/">
          <Image
            className="brand-logo"
            src="/logo.png"
            alt=""
            width={26}
            height={26}
            priority
          />
          <span className="brand-name">cohortes</span>
        </Link>

        <nav className="site-nav" aria-label={t('ariaLabel')}>
          <Link className="nav-link" href="/" aria-current={current('/')}>
            {t('home')}
          </Link>

          <div
            className={`nav-drop${open ? ' is-open' : ''}`}
            ref={dropRef}
          >
            <button
              className="nav-link nav-drop-btn"
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((value) => !value)}
            >
              {t('products')}
            </button>
            <div className="nav-menu">
              <Link href="/enquete">
                <b>{p('enquete.name')}</b>
                <span>{p('enquete.desc')}</span>
              </Link>
              <Link href="/plateforme">
                <b>{p('plateforme.name')}</b>
                <span>{p('plateforme.desc')}</span>
              </Link>
            </div>
          </div>

          <Link className="nav-link" href="/about" aria-current={current('/about')}>
            {t('about')}
          </Link>
          <Link className="nav-link" href="/blog" aria-current={current('/blog')}>
            {t('blog')}
          </Link>
          <Link
            className="nav-link nav-lang"
            href={pathname}
            locale={otherLocale}
            lang={otherLocale}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <a
            className="btn btn-accent"
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('demo')}
          </a>
        </nav>
      </div>
    </header>
  );
}
