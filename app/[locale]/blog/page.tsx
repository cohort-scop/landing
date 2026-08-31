import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { alternatesFor, openGraphFor } from '@/lib/seo';
import BlogList from './BlogList';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const title = t('title');
  const description = t('subtitle');
  return {
    title,
    description,
    alternates: alternatesFor(locale, '/blog'),
    openGraph: openGraphFor(locale, title, description),
  };
}

export default function BlogPage() {
  return <BlogList />;
}
