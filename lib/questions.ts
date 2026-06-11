import type { Question } from '@/types/question'

export const questions: Question[] = [
  {
    id: 1,
    category: 'Général',
    question: 'Que signifie le terme "Agile" dans le développement logiciel ?',
    options: [
      'Une méthode de gestion de projet',
      'Un ensemble de valeurs et principes pour livrer de la valeur de façon itérative',
      'Un framework de développement',
      'Un langage de programmation',
    ],
    correctAnswer: 1,
    explanation:
      'L\'Agile est un ensemble de valeurs et principes (définis dans le Manifeste Agile) qui privilégient les itérations courtes, la collaboration et l\'adaptation au changement.',
  },
  {
    id: 2,
    category: 'Général',
    question: 'En quelle année le Manifeste Agile a-t-il été rédigé ?',
    options: ['1999', '2001', '2003', '2005'],
    correctAnswer: 1,
    explanation:
      'Le Manifeste Agile a été rédigé en février 2001 par 17 signataires réunis à Snowbird, Utah.',
  },
  {
    id: 3,
    category: 'Général',
    question: 'Combien de valeurs composent le Manifeste Agile ?',
    options: ['2', '4', '6', '12'],
    correctAnswer: 1,
    explanation:
      'Le Manifeste Agile contient 4 valeurs : (1) Individus et interactions > processus et outils, (2) Logiciel fonctionnel > documentation exhaustive, (3) Collaboration client > négociation contractuelle, (4) Adaptation au changement > suivi d\'un plan.',
  },
  {
    id: 4,
    category: 'Général',
    question: 'Combien de principes accompagnent le Manifeste Agile ?',
    options: ['4', '8', '12', '16'],
    correctAnswer: 2,
    explanation: 'Le Manifeste Agile est composé de 4 valeurs et 12 principes.',
  },
  {
    id: 5,
    category: 'Général',
    question: 'Lequel de ces éléments n\'est pas une valeur du Manifeste Agile ?',
    options: [
      'Individus et interactions',
      'Logiciel fonctionnel',
      'Documentation exhaustive',
      'Collaboration client',
    ],
    correctAnswer: 2,
    explanation:
      'Le Manifeste Agile valorise "un logiciel fonctionnel plutôt qu\'une documentation exhaustive". La documentation exhaustive n\'est pas une valeur agile.',
  },
  {
    id: 6,
    category: 'Scrum',
    question: 'Quelle est la durée maximale recommandée pour un Sprint en Scrum ?',
    options: ['1 semaine', '2 semaines', '4 semaines', '6 semaines'],
    correctAnswer: 2,
    explanation:
      'Un Sprint dure au maximum 4 semaines (1 mois). La durée est fixe et identique tout au long du projet.',
  },
  {
    id: 7,
    category: 'Scrum',
    question: 'Qui est responsable d\'annuler un Sprint ?',
    options: [
      'Le Scrum Master',
      'Le Product Owner',
      'L\'équipe de développement',
      'Le client',
    ],
    correctAnswer: 1,
    explanation:
      'Seul le Product Owner a le pouvoir d\'annuler un Sprint, généralement si l\'Objectif du Sprint devient obsolète.',
  },
  {
    id: 8,
    category: 'Scrum',
    question: 'Quel est le rôle du Scrum Master ?',
    options: [
      'Gérer l\'équipe et répartir les tâches',
      'Faciliter le processus Scrum et éliminer les obstacles',
      'Définir les fonctionnalités du produit',
      'Tester le logiciel',
    ],
    correctAnswer: 1,
    explanation:
      'Le Scrum Master est un facilitateur qui aide l\'équipe à appliquer Scrum, élimine les impediments et protège l\'équipe des distractions.',
  },
  {
    id: 9,
    category: 'Scrum',
    question: 'Qu\'est-ce que le Product Backlog ?',
    options: [
      'La liste des bugs à corriger',
      'Le planning des Sprints à venir',
      'Une liste ordonnée de tout ce qui est nécessaire pour le produit',
      'Le compte-rendu de la Daily Meeting',
    ],
    correctAnswer: 2,
    explanation:
      'Le Product Backlog est une liste ordonnée et évolutive de toutes les fonctionnalités, améliorations et correctifs souhaités pour le produit.',
  },
  {
    id: 10,
    category: 'Scrum',
    question: 'Quels sont les trois piliers du contrôle empirique en Scrum ?',
    options: [
      'Planification, Exécution, Vérification',
      'Transparence, Inspection, Adaptation',
      'Itération, Incrément, Livraison',
      'Définition, Conception, Développement',
    ],
    correctAnswer: 1,
    explanation:
      'Les trois piliers sont la Transparence (les aspects importants doivent être visibles), l\'Inspection (vérifier régulièrement) et l\'Adaptation (ajuster si nécessaire).',
  },
  {
    id: 11,
    category: 'Scrum',
    question: 'Qu\'est-ce que la Definition of Done (DoD) ?',
    options: [
      'La date de fin du projet',
      'Une checklist de critères qu\'un incrément doit satisfaire pour être considéré comme terminé',
      'Le document de spécifications signé par le client',
      'La liste des tâches du Sprint',
    ],
    correctAnswer: 1,
    explanation:
      'La Definition of Done est un engagement formel définissant ce que "fini" signifie pour un incrément du produit.',
  },
  {
    id: 12,
    category: 'Scrum',
    question: 'Quelles sont les cinq événements formels de Scrum ?',
    options: [
      'Sprint, Planning, Daily, Review, Rétrospective',
      'Sprint, Réunion, Test, Livraison, Feedback',
      'Analyse, Conception, Développement, Test, Déploiement',
      'Kickoff, Sprint, Revue, Bilan, Clôture',
    ],
    correctAnswer: 0,
    explanation:
      'Les 5 événements sont : le Sprint, le Sprint Planning, la Daily Scrum, la Sprint Review et la Sprint Retrospective.',
  },
  {
    id: 13,
    category: 'Scrum',
    question: 'Qui participe à la Daily Scrum ?',
    options: [
      'Tous les stakeholders',
      'Le Product Owner uniquement',
      'L\'équipe de développement (et éventuellement le Scrum Master et PO)',
      'Les managers uniquement',
    ],
    correctAnswer: 2,
    explanation:
      'La Daily Scrum est pour l\'équipe de développement. Le Scrum Master et le Product Owner peuvent y assister mais n\'ont pas obligation de parler.',
  },
  {
    id: 14,
    category: 'Scrum',
    question: 'Quel est l\'objectif de la Sprint Retrospective ?',
    options: [
      'Présenter l\'incrément aux stakeholders',
      'Planifier le prochain Sprint',
      'Identifier les améliorations pour le prochain Sprint',
      'Distribuer les tâches quotidiennes',
    ],
    correctAnswer: 2,
    explanation:
      'La Sprint Retrospective vise à inspecter le déroulement du Sprint et à créer un plan d\'amélioration pour le Sprint suivant.',
  },
  {
    id: 15,
    category: 'Scrum',
    question: 'Qu\'est-ce qu\'un User Story ?',
    options: [
      'Un cas de test détaillé',
      'Une description informelle d\'une fonctionnalité du point de vue de l\'utilisateur',
      'Un diagramme technique',
      'Un rapport de bug',
    ],
    correctAnswer: 1,
    explanation:
      'Une User Story décrit brièvement une fonctionnalité du point de vue de l\'utilisateur, généralement au format : "En tant que [rôle], je veux [action] afin de [bénéfice]".',
  },
  {
    id: 16,
    category: 'Scrum',
    question: 'Que signifie l\'acronyme INVEST pour une User Story ?',
    options: [
      'Integrated, Negotiable, Valuable, Essential, Simple, Testable',
      'Independent, Negotiable, Valuable, Estimable, Small, Testable',
      'Iterative, Numerical, Verbal, Explicit, Systematic, Traceable',
      'Incremental, Necessary, Verified, Estimated, Sized, Timely',
    ],
    correctAnswer: 1,
    explanation:
      'INVEST signifie : Independent (indépendante), Negotiable (négociable), Valuable (de valeur), Estimable (estimable), Small (petite), Testable (testable).',
  },
  {
    id: 17,
    category: 'Kanban',
    question: 'Quel est le principe fondamental du Kanban ?',
    options: [
      'Planifier tout à l\'avance',
      'Limiter le travail en cours (WIP)',
      'Travailler en sprints de 2 semaines',
      'Avoir des rôles définis',
    ],
    correctAnswer: 1,
    explanation:
      'Le principe fondamental du Kanban est de limiter le travail en cours (WIP - Work In Progress) pour fluidifier le flux et réduire le temps de cycle.',
  },
  {
    id: 18,
    category: 'Kanban',
    question: 'D\'où vient la méthode Kanban ?',
    options: [
      'De l\'industrie automobile Toyota',
      'De la NASA',
      'De Microsoft',
      'De l\'armée américaine',
    ],
    correctAnswer: 0,
    explanation:
      'Le Kanban est issu du système de production Toyota (TPS - Toyota Production System) dans les années 1940-1950.',
  },
  {
    id: 19,
    category: 'Kanban',
    question: 'Que mesure le "Lead Time" en Kanban ?',
    options: [
      'Le temps de travail effectif sur une tâche',
      'Le temps total entre la demande et la livraison d\'une tâche',
      'Le temps passé en réunion',
      'Le temps avant le prochain sprint',
    ],
    correctAnswer: 1,
    explanation:
      'Le Lead Time est le temps total écoulé entre le moment où une tâche est demandée et celui où elle est livrée.',
  },
  {
    id: 20,
    category: 'Kanban',
    question: 'Que représente le "Cycle Time" en Kanban ?',
    options: [
      'Le temps entre deux livraisons',
      'Le temps qu\'une tâche passe réellement en cours de travail actif',
      'La durée d\'un sprint',
      'Le temps de réunion quotidienne',
    ],
    correctAnswer: 1,
    explanation:
      'Le Cycle Time mesure le temps pendant lequel une tâche est activement travaillée, du début à la fin du travail.',
  },
  {
    id: 21,
    category: 'Kanban',
    question: 'Qu\'est-ce qu\'un tableau Kanban permet de visualiser ?',
    options: [
      'Le planning annuel',
      'Le flux de travail et les tâches en cours',
      'Les salaires de l\'équipe',
      'Le diagramme de Gantt',
    ],
    correctAnswer: 1,
    explanation:
      'Un tableau Kanban visualise le flux de travail avec des colonnes représentant les étapes du processus et des cartes pour chaque tâche.',
  },
  {
    id: 22,
    category: 'XP',
    question: 'Que signifie XP (eXtreme Programming) ?',
    options: [
      'Programming extrême',
      'Programmation exploratoire',
      'Programmation experte',
      'Programmation express',
    ],
    correctAnswer: 0,
    explanation:
      'eXtreme Programming (XP) est une méthode agile qui pousse les bonnes pratiques de développement à l\'extrême.',
  },
  {
    id: 23,
    category: 'XP',
    question: 'Qu\'est-ce que la Programmation en Paire (Pair Programming) ?',
    options: [
      'Deux programmeurs travaillent sur deux tâches différentes en parallèle',
      'Deux programmeurs travaillent ensemble sur le même code, l\'un écrit, l\'autre révise en temps réel',
      'Un programmeur écrit le code et un autre le teste',
      'Deux équipes programment la même fonctionnalité',
    ],
    correctAnswer: 1,
    explanation:
      'Le Pair Programming consiste en deux développeurs travaillant sur le même poste : le "driver" écrit le code et le "navigator" révise et guide en temps réel.',
  },
  {
    id: 24,
    category: 'XP',
    question: 'Qu\'est-ce que le Test-Driven Development (TDD) ?',
    options: [
      'Écrire les tests après le code',
      'Écrire le test avant le code, puis faire passer le test',
      'Tester uniquement à la fin du projet',
      'Faire tester par une équipe QA',
    ],
    correctAnswer: 1,
    explanation:
      'Le TDD suit le cycle Red-Green-Refactor : écrire un test qui échoue (Red), écrire le code minimal pour le passer (Green), puis améliorer le code (Refactor).',
  },
  {
    id: 25,
    category: 'XP',
    question: 'Qu\'est-ce que l\'Intégration Continue (CI) ?',
    options: [
      'Intégrer le code une fois par mois',
      'Intégrer et tester le code plusieurs fois par jour',
      'Fusionner toutes les branches à la fin du projet',
      'Déployer automatiquement en production',
    ],
    correctAnswer: 1,
    explanation:
      'L\'Intégration Continue consiste à intégrer et tester le code de chaque développeur plusieurs fois par jour pour détecter rapidement les conflits et bugs.',
  },
  {
    id: 26,
    category: 'SAFe',
    question: 'Que signifie SAFe (Scaled Agile Framework) ?',
    options: [
      'Un framework pour la sécurité agile',
      'Un framework pour passer à l\'échelle les pratiques agiles dans les grandes organisations',
      'Un outil de gestion de projet',
      'Une méthode de développement simple',
    ],
    correctAnswer: 1,
    explanation:
      'SAFe est un framework qui permet d\'appliquer les principes agiles à grande échelle, dans les organisations de plusieurs centaines de personnes.',
  },
  {
    id: 27,
    category: 'SAFe',
    question: 'Qu\'est-ce qu\'un "Program Increment" (PI) dans SAFe ?',
    options: [
      'Une incrémentation de code',
      'Un intervalle de planification et livraison d\'environ 8 à 12 semaines',
      'Une réunion quotidienne',
      'Un indicateur de performance',
    ],
    correctAnswer: 1,
    explanation:
      'Un Program Increment (PI) est une période de planification et de livraison d\'environ 8 à 12 semaines qui permet d\'aligner les équipes.',
  },
  {
    id: 28,
    category: 'XP',
    question: 'Qu\'est-ce que le "Refactoring" en XP ?',
    options: [
      'Réécrire tout le code de zéro',
      'Modifier la structure du code sans changer son comportement pour améliorer sa qualité',
      'Supprimer des fonctionnalités',
      'Ajouter des commentaires au code',
    ],
    correctAnswer: 1,
    explanation:
      'Le refactoring consiste à améliorer la structure interne du code sans modifier son comportement externe, pour le rendre plus propre et maintenable.',
  },
  {
    id: 29,
    category: 'Général',
    question: 'Qu\'est-ce qu\'une itération dans un contexte agile ?',
    options: [
      'Une boucle infinie',
      'Un cycle de développement de durée fixe qui produit un incrément potentiellement livrable',
      'Une réunion de planification',
      'Un document technique',
    ],
    correctAnswer: 1,
    explanation:
      'Une itération est un cycle de développement de durée fixe (typiquement 1 à 4 semaines) qui produit un incrément de produit potentiellement livrable.',
  },
  {
    id: 30,
    category: 'Général',
    question: 'Quelle est la différence entre Scrum et Kanban ?',
    options: [
      'Scrum est pour les petits projets, Kanban pour les grands',
      'Scrum utilise des itérations à durée fixe (Sprints), Kanban est un flux continu avec limites WIP',
      'Il n\'y a aucune différence',
      'Kanban nécessite plus de documentation',
    ],
    correctAnswer: 1,
    explanation:
      'Scrum fonctionne par itérations à durée fixe (Sprints) avec des rôles et événements définis, tandis que Kanban est un flux continu avec limites de travail en cours (WIP).',
  },
  {
    id: 31,
    category: 'Général',
    question: 'Qu\'est-ce que la vélocité d\'une équipe agile ?',
    options: [
      'La vitesse d\'exécution du code',
      'La quantité de travail qu\'une équipe peut livrer durant une itération',
      'Le nombre de bugs corrigés par jour',
      'La vitesse de téléchargement',
    ],
    correctAnswer: 1,
    explanation:
      'La vélocité mesure la quantité de travail (souvent en story points) qu\'une équipe parvient à livrer dans une itération. Elle sert à estimer la capacité future.',
  },
  {
    id: 32,
    category: 'SAFe',
    question: 'Quels sont les niveaux principaux de SAFe ?',
    options: [
      'Équipe, Programme, Portefeuille',
      'Débutant, Intermédiaire, Expert',
      'Local, Régional, National',
      'Conception, Développement, Test',
    ],
    correctAnswer: 0,
    explanation:
      'Les trois niveaux principaux de SAFe sont : Team (équipe agile), Program (programme/ART) et Portfolio (portefeuille stratégique).',
  },
  {
    id: 33,
    category: 'Scrum',
    question: 'Qu\'est-ce que le Sprint Backlog ?',
    options: [
      'La liste de toutes les fonctionnalités du produit',
      'L\'ensemble des éléments du Product Backlog sélectionnés pour le Sprint, plus le plan pour les réaliser',
      'Le rapport de fin de Sprint',
      'La liste des bugs à corriger',
    ],
    correctAnswer: 1,
    explanation:
      'Le Sprint Backlog est l\'ensemble des éléments du Product Backlog choisis pour le Sprint, assorti du plan de livraison de l\'incrément.',
  },
  {
    id: 34,
    category: 'Scrum',
    question: 'Qu\'est-ce qu\'un "Impediment" en Scrum ?',
    options: [
      'Une tâche prioritaire',
      'Un obstacle qui bloque l\'équipe et l\'empêche d\'avancer',
      'Un livrable validé',
      'Une user story non prioritaire',
    ],
    correctAnswer: 1,
    explanation:
      'Un impediment est un obstacle ou blocage qui empêche l\'équipe de développement d\'atteindre l\'Objectif du Sprint. Le Scrum Master aide à le résoudre.',
  },
  {
    id: 35,
    category: 'Kanban',
    question: 'Que signifie WIP dans le contexte Kanban ?',
    options: [
      'Work In Progress - Travail en cours',
      'Weekly Improvement Plan',
      'Work Integration Protocol',
      'Written Implementation Process',
    ],
    correctAnswer: 0,
    explanation:
      'WIP signifie Work In Progress (travail en cours). Limiter le WIP est le principe central du Kanban pour éviter la surcharge et améliorer le flux.',
  },
]
