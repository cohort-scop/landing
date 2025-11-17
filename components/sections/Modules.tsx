'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import GroupIcon from '@/components/icons/group.svg';
import BeakerIcon from '@/components/icons/beaker.svg';
import HandIcon from '@/components/icons/hand.svg';
import LightIcon from '@/components/icons/light.svg';
import TestifyIcon from '@/components/icons/testify.svg';

const steps = [
  {
    key: 'group',
    icon: GroupIcon,
    number: '01',
    image: '/images/modules/group.png',
  },
  {
    key: 'witness',
    icon: TestifyIcon,
    number: '02',
    image: '/images/modules/testify.png',
  },
  {
    key: 'question',
    icon: HandIcon,
    number: '03',
    image: '/images/modules/question.png',
  },
  {
    key: 'analyze',
    icon: LightIcon,
    number: '04',
    image: '/images/modules/analyze.png',
  },
  {
    key: 'memory',
    icon: BeakerIcon,
    number: '05',
    image: '/images/modules/question.png',
  }
];

export default function Modules() {
  const t = useTranslations('modules');
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="module" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cohortes-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-10">
          {/* Left: Sticky Image (hidden on mobile) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32">
              <div className="aspect-square max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden border-[12px] border-gray-800 bg-[#f8f8f8] relative">
                {/* MacOS-style title bar - overlay */}
                <div className="absolute top-0 left-0 right-0 bg-gray-200/95 backdrop-blur-sm px-4 py-3 flex items-center gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Screenshot area */}
                <Image
                  src={steps[activeStep].image}
                  alt={`${steps[activeStep].key} screenshot`}
                  fill
                  className="object-contain object-top pt-8"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gray-100 group-hover:bg-cohortes-orange group-hover:text-white transition-colors flex items-center justify-center text-2xl font-bold text-cohortes-orange">
                      <step.icon className="w-9 h-9" />
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-gray-400 group-hover:text-cohortes-orange transition-colors">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-cohortes-dark group-hover:text-cohortes-orange transition-colors">
                        {t(`${step.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`${step.key}.description`)}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
