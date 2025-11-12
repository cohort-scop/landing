'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cohortes-dark mb-6 leading-tight">
            {t('title')}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-cohortes-orange rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              {t('cta')}
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-cohortes-dark bg-white border-2 border-gray-200 rounded-lg hover:border-cohortes-orange transition-all"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </motion.div>

        {/* Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="aspect-video bg-gradient-to-br from-cohortes-dark to-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cohortes-orange/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/10 text-9xl font-bold">Cohortes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
