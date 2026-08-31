import type { MetadataRoute } from 'next'
import { BASE } from '@/lib/seo'

/**
 * Politique robots 2026 : on autorise les bots de *recherche* IA
 * (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot… = éligibilité
 * aux citations dans ChatGPT/Perplexity/Gemini) et on bloque les bots
 * d'*entraînement* (GPTBot, ClaudeBot, Google-Extended…). Bloquer l'entraînement
 * n'affecte PAS les citations de recherche — ce sont deux familles distinctes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // — Bots de recherche IA (autoriser → citation) —
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // — Bots d'entraînement (bloquer) —
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'meta-externalagent', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      // — Défaut : tout le monde est le bienvenu —
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  }
}
