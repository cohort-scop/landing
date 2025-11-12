'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const t = useTranslations('social');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cohortes-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Open Source Politics reference */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-3xl w-full border-2 border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-cohortes-orange to-orange-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  OSP
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-cohortes-dark mb-2">
                  Open Source Politics
                </h3>
                <p className="text-gray-600">
                  Logiciels libres pour promouvoir la démocratie dans les organisations
                </p>
                <a
                  href="https://opensourcepolitics.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-cohortes-orange hover:underline"
                >
                  En savoir plus →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
