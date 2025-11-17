'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  const calendlyUrl = 'https://calendly.com/roberto-cohortes';

  const handleCTAClick = () => {
    if (typeof window !== 'undefined') {
      window.open(calendlyUrl, '_blank', 'width=800,height=800');
    }
  };

  return (
    <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl text-center">
        <div className="items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <h1 className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent px-4 py-2 text-sm font-medium rounded-full bg-cohortes-dark text-white">
              {t('badge')}
            </h1>

            {/* Main title with orange word */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cohortes-dark mb-6 leading-tight">
              {t('title.part1')}{' '}
              <span className="text-cohortes-orange">{t('title.part2')}</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-cohortes-orange rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                {t('cta')}
              </button>
              <a
                href="#module"
                className="cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base text-cohortes-dark rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl border"
              >
                {t('plus')}
              </a>
            </div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-cohortes-dark to-gray-700 rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cohortes-orange/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/10 text-5xl md:text-7xl font-bold">Cohortes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
