'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SocialProof() {
  const t = useTranslations('social');

  const orgs = [
    {
      name: 'ad conseil',
      image: '/images/proof/adconseil.png',
    },
    {
      name: 'cfdt',
      image: '/images/proof/cfdt.png',
    },
    {
      name: 'anact',
      image: '/images/proof/anact.png',
    },
    {
      name: 'paris',
      image: '/images/proof/paris.png',
    }
  ]

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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {orgs.map((orga, index) => (
            <motion.div
              key={orga.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={orga.image}
                alt={orga.name}
                width={150}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
