import Image from 'next/image';
import { useTranslations } from 'next-intl';

/**
 * Bande sombre pleine largeur, juste après le hero.
 * Les logos sont retournés en blanc par `grayscale(1) invert(1)` combiné à
 * `mix-blend-mode: lighten` (cf. `app/site.css`) : ces PNG ont un fond opaque,
 * un simple `brightness(0) invert(1)` en ferait des rectangles pleins.
 *
 * Pas d'attribut `sizes` : la maquette dimensionne les logos par
 * `max-width`/`max-height` sur leur taille intrinsèque. Avec `sizes`, Next sert
 * un fichier réduit et `width: auto` retombe sur la largeur de ce fichier —
 * Paris&Co s'affichait à 129 px au lieu de 150.
 */
const LOGOS = [
  { src: '/images/proof/adconseil.png', width: 250, height: 64, alt: 'AD Conseil' },
  { src: '/images/proof/cfdt.png', width: 282, height: 373, alt: 'CFDT Hauts-de-France' },
  {
    src: '/images/proof/anact.png',
    width: 507,
    height: 263,
    alt: 'Anact — Agence nationale pour l’amélioration des conditions de travail',
  },
  { src: '/images/proof/paris.png', width: 220, height: 72, alt: 'Paris&Co' },
] as const;

export default function ProofBand() {
  const t = useTranslations('home.proof');

  return (
    <section className="proof" id="confiance">
      <div className="wrap">
        <h2 className="proof-title">{t('title')}</h2>
        <div className="proof-logos">
          {LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
