import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Le français est la locale par défaut (localePrefix 'as-needed') : on
  // redirige /fr/* vers le chemin non préfixé en 301 pour éviter le doublon
  // de contenu entre / et /fr.
  if (pathname === '/fr' || pathname.startsWith('/fr/')) {
    const to = pathname.replace(/^\/fr/, '') || '/';
    const url = request.nextUrl.clone();
    url.pathname = to;
    return NextResponse.redirect(url, 301);
  }

  return handleI18n(request);
}

export const config = {
  matcher: ['/', '/(en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
