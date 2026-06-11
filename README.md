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
