'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'subordination-performance-outils-travail',
    date: '2025-01-10',
    readTime: '8 min',
    category: 'QVCT',
  },
  {
    slug: 'pourquoi-ne-pas-poser-de-questions',
    date: '2024-09-23',
    readTime: '5 min',
    category: 'Méthodologie',
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogPage() {
  const t = useTranslations('blog');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-cohortes-dark mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Blog posts list */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-cohortes-orange/10 text-cohortes-orange rounded-full font-semibold">
                    {post.category}
                  </span>
                  <time>{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-cohortes-dark mb-4 hover:text-cohortes-orange transition-colors">
                    {t(`posts.${post.slug}.title`)}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`posts.${post.slug}.excerpt`)}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-cohortes-orange font-semibold hover:gap-3 transition-all"
                >
                  {t('readMore')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
