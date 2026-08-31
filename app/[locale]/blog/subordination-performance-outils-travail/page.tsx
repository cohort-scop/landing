import type { Metadata } from 'next';
import { alternatesFor, openGraphFor } from '@/lib/seo';
import { getPost } from '@/lib/blog';
import PostJsonLd from '@/lib/PostJsonLd';
import BlogPost from './BlogPost';

const slug = 'subordination-performance-outils-travail';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale === 'fr' ? 'fr' : 'en';
  const post = getPost(slug)!;
  const title = post.title[lang];
  const description = post.excerpt[lang];
  return {
    title,
    description,
    alternates: alternatesFor(locale, `/blog/${slug}`),
    openGraph: openGraphFor(locale, title, description),
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const post = getPost(slug)!;
  return (
    <>
      <BlogPost />
      <PostJsonLd post={post} locale={locale} />
    </>
  );
}
