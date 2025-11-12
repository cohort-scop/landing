'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    return locale === 'fr' ? 'en' : 'fr';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-cohortes-orange transition-colors"
            >
              {t('features')}
            </a>
            <a
              href="#use-cases"
              className="text-gray-700 hover:text-cohortes-orange transition-colors"
            >
              {t('useCases')}
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-cohortes-orange transition-colors"
            >
              {t('contact')}
            </a>

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
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
