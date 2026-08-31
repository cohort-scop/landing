import type { MetadataRoute } from 'next'
import { BASE } from '@/lib/seo'

type Entry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  lastModified?: Date
}

/** Les URL françaises sont sans préfixe, les anglaises sous `/en`. */
const pages: Entry[] = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/enquete', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/plateforme', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/confidentialite', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cgv-cgu', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  {
    path: '/blog/methodologie-diagnostic-conditions-travail',
    changeFrequency: 'yearly',
    priority: 0.6,
    lastModified: new Date('2025-12-24'),
  },
  {
    path: '/blog/pourquoi-ne-pas-poser-de-questions',
    changeFrequency: 'yearly',
    priority: 0.6,
    lastModified: new Date('2024-01-10'),
  },
  {
    path: '/blog/subordination-performance-outils-travail',
    changeFrequency: 'yearly',
    priority: 0.6,
    lastModified: new Date('2024-06-20'),
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pagesWithAlternates = pages.flatMap(({ path, changeFrequency, priority, lastModified }) => {
    const languages = { fr: `${BASE}${path}`, en: `${BASE}/en${path}` }

    return [
      {
        url: languages.fr || BASE,
        lastModified: lastModified ?? now,
        changeFrequency,
        priority,
        alternates: { languages },
      },
      {
        url: languages.en,
        lastModified: lastModified ?? now,
        changeFrequency,
        // La version anglaise est secondaire : un cran en dessous de la française.
        priority: Math.round((priority - 0.1) * 10) / 10,
        alternates: { languages },
      },
    ]
  })

  return [
    ...pagesWithAlternates,
    {
      url: `${BASE}/rss.xml`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ]
}
