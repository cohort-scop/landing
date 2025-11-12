'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-cohortes-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
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

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cohortes. {t('rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
