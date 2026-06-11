# Quiz Méthode Agile

Application Next.js de quiz sur les méthodes agiles (Scrum, Kanban, SAFe, etc.).

## Prérequis

- Node.js >= 18
- npm

## Commandes

```bash
# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Démarrer en mode production
npm start

# Vérifier le linting
npm run lint
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
├── app/          # Pages et layouts (App Router Next.js)
├── components/   # Composants React réutilisables
├── lib/          # Utilitaires et logique métier
├── types/        # Types TypeScript partagés
└── public/       # Fichiers statiques
```

## Stack technique

- [Next.js](https://nextjs.org) 16 — App Router
- TypeScript
- ESLint

## CI/CD & déploiement

Le projet utilise **GitHub Actions** pour l'intégration continue et **Vercel** pour le déploiement.

### Workflows

| Workflow | Déclencheur | Rôle |
| --- | --- | --- |
| [`ci.yml`](.github/workflows/ci.yml) | push sur `main` et PR | Installe les dépendances, lint, build, et lance les tests (`npm test --if-present`). |
| [`deploy-preview.yml`](.github/workflows/deploy-preview.yml) | ouverture/MAJ d'une PR vers `main` | Déploie une **preview** Vercel et publie l'URL en commentaire de la PR. |
| [`deploy-production.yml`](.github/workflows/deploy-production.yml) | push sur `main` | Déploie automatiquement en **production** sur Vercel. |

Le fichier [`vercel.json`](vercel.json) désactive le déploiement automatique de l'intégration Git de Vercel (`git.deploymentEnabled: false`) afin que **seuls** les workflows GitHub Actions déclenchent les déploiements (pas de doublon).

### Configuration des secrets

Les workflows de déploiement nécessitent trois secrets dans le repo
(**Settings → Secrets and variables → Actions → New repository secret**) :

| Secret | Description |
| --- | --- |
| `VERCEL_TOKEN` | Jeton d'accès Vercel (créé via **Vercel → Account Settings → Tokens**). |
| `VERCEL_ORG_ID` | Identifiant de l'organisation/équipe Vercel. |
| `VERCEL_PROJECT_ID` | Identifiant du projet Vercel. |

Pour récupérer `VERCEL_ORG_ID` et `VERCEL_PROJECT_ID`, lier le projet une fois en local :

```bash
npm i -g vercel
vercel link          # crée .vercel/project.json (ignoré par git)
cat .vercel/project.json   # contient "orgId" et "projectId"
```

Une fois les secrets renseignés, chaque PR génère une preview et chaque merge sur `main` déclenche un déploiement en production.
