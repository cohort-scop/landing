# Cohortes Landing Page

Landing page moderne pour Cohortes - Technologie d'écoute collective au service du dialogue social.

## 🚀 Stack technique

- **Next.js 15** avec App Router
- **TypeScript**
- **Tailwind CSS** pour le styling
- **next-intl** pour l'internationalisation FR/EN
- **Framer Motion** pour les animations

## 🎨 Design

- Design sobre et épuré inspiré de Decidim
- Couleurs de marque :
  - Cohortes Dark: `#2C2C34`
  - Cohortes Orange: `#BC3908`

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## 🌍 Internationalisation

Le site est disponible en français et anglais :
- Français : `/fr`
- Anglais : `/en`

Les traductions sont dans `messages/fr.json` et `messages/en.json`

## 📋 Sections

1. **Hero** - Message principal et CTA
2. **Problème/Solution** - Contraste entre KPI imposés et écoute collective
3. **3 Modules** - Témoigner, Questionner, Analyser
4. **Mémoire organisationnelle** - L'angle temporel et mémoriel
5. **Cas d'usage** - Syndicats/CSE, Civic Tech, Collectivités, Associations
6. **Social Proof** - Open Source Politics et références
7. **CTA Final** - Réserver une démo

## 🔧 Configuration Calendly

Modifiez le lien Calendly dans `components/sections/CTASection.tsx` :

```typescript
const calendlyUrl = 'https://calendly.com/your-link-here';
```

## 🚢 Déploiement sur Vercel

1. Poussez votre code sur GitHub
2. Connectez votre repo à Vercel
3. Vercel détectera automatiquement Next.js et configurera le build

ou utilisez la CLI Vercel :

```bash
npm i -g vercel
vercel
```

## 📝 Personnalisation

### Couleurs
Modifiez `tailwind.config.ts` pour ajuster les couleurs

### Contenu
Les textes sont dans `messages/fr.json` et `messages/en.json`

### Logo
Remplacez `public/logo.png` par votre logo

## 📄 License

Propriétaire - Cohortes
