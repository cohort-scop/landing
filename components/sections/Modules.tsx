'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const modules = [
  {
    key: 'witness',
    icon: '🎤',
    color: 'from-blue-500 to-blue-600'
  },
  {
    key: 'question',
    icon: '❓',
    color: 'from-purple-500 to-purple-600'
  },
  {
    key: 'analyze',
    icon: '🔍',
    color: 'from-cohortes-orange to-orange-600'
  }
];

export default function Modules() {
  const t = useTranslations('modules');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-3xl mb-6`}>
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold text-cohortes-dark mb-4">
                {t(`${module.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`${module.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connection arrows */}
        <div className="hidden md:flex items-center justify-center mt-12 space-x-4">
          <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="text-2xl">→</div>
          <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-cohortes-orange"></div>
        </div>
      </div>
    </section>
  );
}
