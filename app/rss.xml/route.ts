import { POSTS } from '@/lib/blog'
import { BASE } from '@/lib/seo'

export const dynamic = 'force-static'

/** Échappe les caractères XML (titre, description, auteur viennent de la config). */
function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => {
      const url = `${BASE}/blog/${post.slug}`
      const author = post.author.name
      return `    <item>
      <title>${esc(post.title.fr)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>${esc(author)}</dc:creator>
      <category>${esc(post.category)}</category>
      <description>${esc(post.excerpt.fr)}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Cohortes — Blog</title>
    <link>${BASE}/blog</link>
    <description>Réflexions sur l'intelligence collective, le dialogue social et la participation citoyenne</description>
    <language>fr-fr</language>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
