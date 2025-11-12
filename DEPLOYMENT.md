# Guide de déploiement Vercel

## Option 1 : Déploiement via l'interface Vercel (Recommandé)

1. **Créez un compte Vercel** (si vous n'en avez pas) sur [vercel.com](https://vercel.com)

2. **Créez un repo GitHub** :
   ```bash
   cd /home/rodesousa/git/roda-landing-page/landing
   git init
   git add .
   git commit -m "Initial commit - Cohortes landing page"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/cohortes-landing.git
   git push -u origin main
   ```

3. **Connectez votre repo à Vercel** :
   - Allez sur [vercel.com/new](https://vercel.com/new)
   - Cliquez sur "Import Git Repository"
   - Sélectionnez votre repo GitHub
   - Vercel détectera automatiquement Next.js

4. **Configurez les variables d'environnement** (optionnel) :
   - Dans l'interface Vercel, ajoutez :
     - `NEXT_PUBLIC_CALENDLY_URL` : votre lien Calendly
     - `NEXT_PUBLIC_CONTACT_EMAIL` : votre email de contact

5. **Déployez** :
   - Cliquez sur "Deploy"
   - Vercel va builder et déployer automatiquement
   - Vous recevrez une URL de type `cohortes-landing.vercel.app`

## Option 2 : Déploiement via CLI Vercel

1. **Installez Vercel CLI** :
   ```bash
   npm i -g vercel
   ```

2. **Déployez** :
   ```bash
   cd /home/rodesousa/git/roda-landing-page/landing
   vercel
   ```

3. **Suivez les instructions** :
   - Connectez votre compte Vercel
   - Confirmez les paramètres du projet
   - Le site sera déployé automatiquement

## Configuration du domaine personnalisé

1. Allez dans les paramètres du projet sur Vercel
2. Section "Domains"
3. Ajoutez `cohortes.co` ou votre domaine
4. Suivez les instructions DNS fournies par Vercel

## Déploiements automatiques

Une fois connecté à GitHub, chaque push sur la branche `main` déclenchera un déploiement automatique.

## Rollback

Si vous devez revenir à une version précédente :
1. Allez dans "Deployments" sur Vercel
2. Trouvez le déploiement précédent
3. Cliquez sur "Promote to Production"

## Variables d'environnement

Ajoutez ces variables dans les paramètres Vercel :

```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/votre-lien
NEXT_PUBLIC_CONTACT_EMAIL=contact@cohortes.co
```

## Performance

Vercel optimise automatiquement :
- Edge caching
- Image optimization
- Compression
- CDN global
