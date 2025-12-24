import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cohortes.co'

  return [
    // Pages principales
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
      priority: 0.9,
    },

    // Blog
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
      priority: 0.7,
    },

    // About
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
      priority: 0.6,
    },

    // Articles de blog
    {
      url: `${baseUrl}/blog/methodologie-diagnostic-conditions-travail`,
      lastModified: new Date('2024-12-24'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/blog/methodologie-diagnostic-conditions-travail`,
      lastModified: new Date('2024-12-24'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
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
      priority: 0.5,
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
      priority: 0.5,
    },
  ]
}
