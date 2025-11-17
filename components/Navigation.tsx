'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLocale = () => {
    return locale === 'fr' ? 'en' : 'fr';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Cohortes"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-cohortes-dark">
              Cohortes
            </span>
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-cohortes-orange transition-colors"
            >
              {t('features')}
            </a>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-cohortes-orange transition-colors"
            >
              {t('blog')}
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-cohortes-orange transition-colors"
            >
              {t('about')}
            </Link>
            {/* Language switcher */}
            <Link
              href={pathname}
              locale={toggleLocale()}
              className="text-sm px-3 py-1 rounded-md border border-gray-300 hover:border-cohortes-orange transition-colors"
            >
              {toggleLocale().toUpperCase()}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-cohortes-dark"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-cohortes-dark"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-cohortes-orange transition-colors py-2"
              >
                {t('features')}
              </a>
              <a
                href="#use-cases"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-cohortes-orange transition-colors py-2"
              >
                {t('useCases')}
              </a>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-cohortes-orange transition-colors py-2"
              >
                {t('blog')}
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-cohortes-orange transition-colors py-2"
              >
                {t('about')}
              </Link>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-cohortes-orange transition-colors py-2"
              >
                {t('contact')}
              </a>

              {/* Language switcher mobile */}
              <Link
                href={pathname}
                locale={toggleLocale()}
                onClick={closeMobileMenu}
                className="text-sm px-3 py-2 rounded-md border border-gray-300 hover:border-cohortes-orange transition-colors inline-block w-fit"
              >
                {toggleLocale().toUpperCase()}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
