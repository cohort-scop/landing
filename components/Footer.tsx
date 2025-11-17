'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-cohortes-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Cohortes"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div>
              <div className="text-lg font-bold">Cohortes</div>
              <div className="text-sm text-gray-400">{t('tagline')}</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/cohortes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Cohortes. {t('rights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
