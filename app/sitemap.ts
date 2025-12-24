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
      alternates: {
        languages: {
          fr: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          fr: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },

    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },

    // About
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${baseUrl}/about`,
          en: `${baseUrl}/en/about`,
        },
      },
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          fr: `${baseUrl}/about`,
          en: `${baseUrl}/en/about`,
        },
      },
    },

    // Articles de blog
    {
      url: `${baseUrl}/blog/methodologie-diagnostic-conditions-travail`,
      lastModified: new Date('2025-12-24'),
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/methodologie-diagnostic-conditions-travail`,
          en: `${baseUrl}/en/blog/methodologie-diagnostic-conditions-travail`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog/methodologie-diagnostic-conditions-travail`,
      lastModified: new Date('2025-12-24'),
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/methodologie-diagnostic-conditions-travail`,
          en: `${baseUrl}/en/blog/methodologie-diagnostic-conditions-travail`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/pourquoi-ne-pas-poser-de-questions`,
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/pourquoi-ne-pas-poser-de-questions`,
          en: `${baseUrl}/en/blog/pourquoi-ne-pas-poser-de-questions`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog/pourquoi-ne-pas-poser-de-questions`,
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/pourquoi-ne-pas-poser-de-questions`,
          en: `${baseUrl}/en/blog/pourquoi-ne-pas-poser-de-questions`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/subordination-performance-outils-travail`,
      lastModified: new Date('2024-06-20'),
      changeFrequency: 'yearly',
      priority: 0.6,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/subordination-performance-outils-travail`,
          en: `${baseUrl}/en/blog/subordination-performance-outils-travail`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog/subordination-performance-outils-travail`,
      lastModified: new Date('2024-06-20'),
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: {
        languages: {
          fr: `${baseUrl}/blog/subordination-performance-outils-travail`,
          en: `${baseUrl}/en/blog/subordination-performance-outils-travail`,
        },
      },
    },
  ]
}
