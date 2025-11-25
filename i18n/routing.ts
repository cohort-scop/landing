import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed', // "/" affiche le contenu FR, "/en" pour anglais
  localeDetection: false // Empêche la redirection automatique basée sur le navigateur
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
