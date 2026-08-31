'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { POSTS } from '@/lib/blog';

/**
 * Bloc « À lire aussi » en bas d'article : les autres articles du blog + un
 * renvoi vers le logiciel d'enquête. Améliore le maillage interne.
 */
export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const locale = useLocale() as 'fr' | 'en';
  const t = useTranslations('blog');
  const others = POSTS.filter((post) => post.slug !== currentSlug);

  return (
    <aside className="mt-16 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-bold text-cohortes-dark mb-4">{t('readNext')}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {others.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-gray-50 rounded-xl p-5 hover:bg-cohortes-orange/5 transition-colors"
          >
            <span className="text-xs uppercase tracking-wide text-gray-400">
              {post.category}
            </span>
            <h3 className="text-cohortes-dark font-semibold mt-1 hover:text-cohortes-orange transition-colors">
              {post.title[locale]}
            </h3>
          </Link>
        ))}
      </div>
      <p className="mt-6">
        <Link
          href="/enquete"
          className="inline-flex items-center gap-2 text-cohortes-orange font-semibold hover:gap-3 transition-all"
        >
          {t('ctaEnquete')}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </p>
    </aside>
  );
}
