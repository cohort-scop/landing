'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const useCases = [
  { key: 'social', icon: '🤝', gradient: 'from-blue-500 to-cyan-500' },
  { key: 'civic', icon: '🏛️', gradient: 'from-purple-500 to-pink-500' },
  { key: 'public', icon: '🏢', gradient: 'from-green-500 to-emerald-500' },
  { key: 'association', icon: '👥', gradient: 'from-orange-500 to-red-500' }
];

export default function UseCases() {
  const t = useTranslations('useCases');

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cohortes-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {useCase.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cohortes-dark mb-2">
                    {t(`${useCase.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${useCase.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
