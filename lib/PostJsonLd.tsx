import type { Post } from './blog'
import { BASE } from './seo'

/**
 * JSON-LD injecté sur chaque article : BlogPosting (+ speakable) et
 * BreadcrumbList. Le publisher pointe vers l'`@id` de l'Organization (#org),
 * déclarée une fois dans le layout global — c'est ce qui rend l'article
 * « citable » par les moteurs génératifs.
 */
export default function PostJsonLd({ post, locale }: { post: Post; locale: string }) {
  const lang = locale === 'fr' ? 'fr' : 'en'
  const blogPath = locale === 'fr' ? '/blog' : '/en/blog'
  const url = `${BASE}${blogPath}/${post.slug}`
  const blogUrl = `${BASE}${blogPath}`

  const author =
    post.author.type === 'person'
      ? {
          '@type': 'Person',
          '@id': `${BASE}/#author-${post.slug}`,
          name: post.author.name,
          ...(post.author.url ? { url: post.author.url } : {}),
        }
      : { '@type': 'Organization', '@id': `${BASE}/#org`, name: post.author.name }

  const json = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        mainEntityOfPage: url,
        headline: post.title[lang],
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: lang,
        author,
        publisher: { '@id': `${BASE}/#org` },
        isAccessibleForFree: true,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.prose > p:first-of-type', 'h1'],
        },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'fr' ? 'Accueil' : 'Home',
            item: BASE,
          },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: blogUrl },
          { '@type': 'ListItem', position: 3, name: post.title[lang], item: url },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
