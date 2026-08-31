/** Constantes et helpers SEO/GEO partagés. */

export const BASE = 'https://www.cohortes.co'

/** og:image par défaut (1200×630), générée par scripts/make_og.py. */
export const OG_IMAGE = {
  url: `${BASE}/og.png`,
  width: 1200,
  height: 630,
  alt: 'Cohortes — le témoignage au service du travail',
}

/**
 * Canonical + hreflang pour une page donnée.
 * `path` = chemin non préfixé ('', '/enquete', '/blog/<slug>'…).
 */
export function alternatesFor(locale: string, path: string) {
  const fr = `${BASE}${path}`
  const en = `${BASE}/en${path}`
  return {
    canonical: locale === 'fr' ? fr : en,
    languages: { fr, en, 'x-default': fr },
  }
}

/** Métadonnées Open Graph minimales, cohérentes avec la langue de la page. */
export function openGraphFor(locale: string, title: string, description: string) {
  return {
    title,
    description,
    type: 'website' as const,
    locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    siteName: 'Cohortes',
    images: [
      {
        ...OG_IMAGE,
        alt:
          locale === 'fr'
            ? 'Cohortes — le témoignage au service du travail'
            : 'Cohortes — testimony in the service of work',
      },
    ],
  }
}
