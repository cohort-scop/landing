import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function AboutPage() {
  const t = useTranslations('about');

  const team = [
    {
      name: 'Louise Naudin',
      role: t('team.louise.role'),
      email: 'louise@cohortes.co',
      linkedin: 'https://www.linkedin.com/in/louisenaudin/',
      image: '/images/about/louise.png',
    },
    {
      name: 'Roberto Barros De Sousa',
      role: t('team.roberto.role'),
      email: 'roberto@cohortes.co',
      linkedin: 'https://www.linkedin.com/in/roberto-barros-de-sousa-16635665/',
      image: '/images/about/roberto.png',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cohortes-orange/10 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cohortes-dark mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t('team.title')}
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member) => (
              <div
                key={member.email}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow"
              >
                {/* Photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-cohortes-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-cohortes-orange font-semibold mb-4">
                  {member.role}
                </p>

                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-cohortes-orange transition-colors"
                  >
                    {member.email}
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
