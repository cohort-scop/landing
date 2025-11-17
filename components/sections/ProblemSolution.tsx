'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import CheckedIcon from '@/components/icons/checked.svg'

export default function ProblemSolution() {
  const t = useTranslations('problem');

  const painPoints = [
    { title: t('painPoints.first'), key: "first" },
    {
      title: t('painPoints.second'), key: "second",
    },
    { title: t('painPoints.third'), key: "third" },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2C2C34]">
      <div className="container mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            <div>
              {t('title')}
            </div>
            <div>
              {t('subtitle')}
            </div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-0  lg:grid-cols-3 gap-10 lg:gap-20">
          {painPoints.map(point => (
            <motion.div key={point.key} className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-105 text-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-cohortes-orange/5 to-transparent"></div>
              <div className="w-12 h-12 text-white rounded-full bg-cohortes-orange/20 flex items-center justify-center">
                <CheckedIcon className="lucide lucide-circle-check w-6 h-6 text-cohortes-orange" />
              </div>
              <h3 className="text-xl font-semibold">
                {point.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}
