import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cohortes.co'

  return [
    // Page principale (FR par défaut, pas de /fr)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },

    // Blog (FR sans préfixe)
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // About (FR sans préfixe)
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Articles de blog (FR sans préfixe)
    {
      url: `${baseUrl}/blog/pourquoi-ne-pas-poser-de-questions`,
      lastModified: new Date('2024-10-25'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/blog/pourquoi-ne-pas-poser-de-questions`,
      lastModified: new Date('2024-10-25'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/subordination-performance-outils-travail`,
      lastModified: new Date('2024-10-25'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/blog/subordination-performance-outils-travail`,
      lastModified: new Date('2024-10-25'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
