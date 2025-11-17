'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function OrganizationalMemory() {
  const t = useTranslations('memory');

  const benefits = ['evolution', 'feelings', 'signals'];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cohortes-orange/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cohortes-dark mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('description')}
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cohortes-orange flex items-center justify-center text-white text-sm font-bold mt-1">
                    ✓
                  </div>
                  <span className="text-gray-700 text-lg">
                    {t(`benefits.${benefit}`)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cohortes-dark to-gray-700 overflow-hidden shadow-2xl w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-cohortes-orange/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="text-white/10 text-6xl md:text-8xl font-bold">📚</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
