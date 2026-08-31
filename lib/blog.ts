/** Registre unique des articles de blog (source de vérité pour les pages,
 *  le sitemap et le JSON-LD). */

export type PostAuthor =
  | { type: 'person'; name: string; url?: string }
  | { type: 'org'; name: string }

export type Post = {
  slug: string
  date: string
  category: 'Méthodologie' | 'QVCT'
  readTime: string
  title: Record<'fr' | 'en', string>
  excerpt: Record<'fr' | 'en', string>
  author: PostAuthor
}

export const POSTS: Post[] = [
  {
    slug: 'methodologie-diagnostic-conditions-travail',
    date: '2025-12-24',
    category: 'Méthodologie',
    readTime: '10 min',
    title: {
      fr: 'Un cadre méthodologique pour un meilleur diagnostic des conditions de travail',
      en: 'A methodological framework for better working conditions diagnosis',
    },
    excerpt: {
      fr: 'Ce document expose le cadre méthodologique simple et opérationnel développé par Cohortes et visant à améliorer la qualité des diagnostics des conditions de travail à partir de témoignages libres écrits et oraux.',
      en: 'This document presents the simple and operational methodological framework developed by Cohortes to improve the quality of working conditions diagnoses based on free written and oral testimonies.',
    },
    author: { type: 'org', name: 'Cohortes' },
  },
  {
    slug: 'pourquoi-ne-pas-poser-de-questions',
    date: '2024-01-10',
    category: 'Méthodologie',
    readTime: '5 min',
    title: {
      fr: "Des bonnes raisons de ne pas poser de questions lorsque l'on souhaite obtenir de vraies réponses",
      en: 'Good reasons not to ask questions when you want to get real answers',
    },
    excerpt: {
      fr: "La question peut paraître étrange, mais laissez-vous surprendre, un petit instant, par la fréquence d'une démarche qui est aujourd'hui entrée dans les mœurs.",
      en: 'The question may seem strange, but let yourself be surprised, for a moment, by the frequency of a practice that has now become commonplace.',
    },
    author: {
      type: 'person',
      name: 'Nais Bonnamy Jeanroy',
      url: 'https://www.linkedin.com/in/na%C3%AFs-bonnamy-jeanroy-9028ba207?originalSubdomain=fr',
    },
  },
  {
    slug: 'subordination-performance-outils-travail',
    date: '2024-06-20',
    category: 'QVCT',
    readTime: '8 min',
    title: {
      fr: "Comment les outils d'organisation du travail inscrivent la subordination des conditions de travail à la performance ?",
      en: 'How work organization tools embed the subordination of working conditions to performance?',
    },
    excerpt: {
      fr: "L'entreprise se dote d'outils d'organisation pour mener à bien la performance. C'est l'un des discours utilisé pour justifier la présence des outils d'organisation du travail en entreprise. Sans eux, l'organisation serait chaotique.",
      en: 'Companies equip themselves with organizational tools to achieve performance. This is one of the discourses used to justify the presence of work organization tools in companies. Without them, the organization would be chaotic.',
    },
    author: {
      type: 'person',
      name: 'Roberto Barros De Sousa',
      url: 'https://www.linkedin.com/in/roberto-barros-de-sousa-16635665/',
    },
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug)
}
