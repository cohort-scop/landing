'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function CTASection() {
  const t = useTranslations('cta');

  const calendlyUrl = 'https://calendly.com/roberto-cohortes';

  const handleCTAClick = () => {
    if (typeof window !== 'undefined') {
      window.open(calendlyUrl, '_blank', 'width=800,height=800');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cohortes-dark to-cohortes-orange">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('subtitle')}
          </p>

          <button
            onClick={handleCTAClick}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-cohortes-dark bg-white rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
          >
            {t('button')}
          </button>

          <p className="mt-6 text-sm text-white">
            {t('contact')} contact@cohortes.co
          </p>
        </motion.div>
      </div>
    </section>
  );
}
