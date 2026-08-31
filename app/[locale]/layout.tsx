import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import { BASE } from '@/lib/seo';
import '../globals.css';
import '../site.css';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import RevealObserver from '@/components/site/RevealObserver';

const inter = Inter({ subsets: ['latin'] });

/**
 * Entités du site, déclarées UNE fois avec des `@id` stables, et référencées
 * ensuite par chaque page (publisher du BlogPosting, etc.). C'est la base de
 * la citation par les moteurs génératifs.
 */
function siteJsonLd(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE}/#org`,
        name: 'Cohortes',
        url: BASE,
        logo: `${BASE}/logo.png`,
        sameAs: ['https://www.linkedin.com/company/cohortes'],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        name: 'Cohortes',
        url: BASE,
        inLanguage: locale,
        publisher: { '@id': `${BASE}/#org` },
      },
    ],
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Cohortes — Blog"
          href="/rss.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd(locale)) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <RevealObserver />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
