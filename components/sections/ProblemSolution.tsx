'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ProblemSolution() {
  const t = useTranslations('problem');

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-cohortes-dark mb-16"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-gray-50 border-2 border-gray-200"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
              ✕
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              {t('oldWay.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('oldWay.description')}
            </p>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-cohortes-orange/10 to-white border-2 border-cohortes-orange"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-cohortes-orange rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-cohortes-dark mb-4">
              {t('newWay.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('newWay.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
