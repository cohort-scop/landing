'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import HearthIcon from '@/components/icons/hearth.svg';
import GroupIcon from '@/components/icons/group.svg';

export default function UseCases() {
  const t = useTranslations('useCases');

  const useCases = [
    {
      key: 'social', icon: HearthIcon, gradient: 'from-blue-500 to-cyan-500',
    },
    { key: 'association', icon: GroupIcon, gradient: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-cohortes-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-white">
            {t('subtitle')} <span className="font-bold underline">{t('civic')}</span> et la <span className="font-bold underline">{t('qvct')}</span> {t('qvct_full')} ?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const actors = t.raw(`${useCase.key}.actors`) as string[];

            return (
              <motion.div
                key={useCase.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl px-6 py-10 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-cohortes-orange rounded-xl p-3">
                    <useCase.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cohortes-dark mb-2">
                      {t(`${useCase.key}.title`)}
                    </h3>
                    <div className="mb-5 mt-12">
                      <span className="px-4 py-2 bg-cohortes-dark text-white rounded-full text-sm font-semibold">
                        {t('who')}
                      </span>
                    </div>
                    <ul className="text-gray-600 leading-relaxed list-disc pl-5 marker:text-cohortes-orange text-lg space-y-2">
                      {actors.map((actor, idx) => (
                        <li key={idx}>
                          {actor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
