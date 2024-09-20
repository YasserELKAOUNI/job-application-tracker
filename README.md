# Job Application Tracker

![Job Application Tracker Banner](./assets/banner.png)

## Table des Matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Statut Actuel](#statut-actuel)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Problèmes Connus](#problèmes-connus)
- [Contribuer](#contribuer)
- [Auteur](#auteur)
- [Licence](#licence)

## Description

**Job Application Tracker** est une application web conçue pour aider les utilisateurs à gérer et suivre leurs candidatures de manière efficace. L'app permet l'importation de données à partir de fichiers Excel, CSV, ou JSON, et propose des visualisations pour suivre le statut de chaque candidature. Développée avec un focus particulier sur l'expérience utilisateur et la flexibilité, elle vise à simplifier le processus de recherche d'emploi.

## Fonctionnalités

- **Importation de Données :**
  - Importez des données de candidatures à partir de fichiers Excel (`.xlsx`, `.xls`), CSV (`.csv`), ou JSON (`.json`).
  - Analyse intelligente qui gère les colonnes manquantes ou supplémentaires sans souci.

- **Visualisation des Données :**
  - **Graphiques en Secteurs:** Visualisez la répartition des candidatures par statut.
  - **Graphiques Linéaires:** Suivez les tendances des candidatures dans le temps.
  - **Nuages de Points:** Analysez les relations entre les offres salariales et le statut des candidatures.

- **Préférences Utilisateur :**
  - Choix de thème (Clair, Sombre, Personnalisé).
  - Préférences de notifications pour les suivis de candidature.

- **Design Responsive :**
  - Optimisé pour diverses tailles d'écran grâce à Tailwind CSS.

- **Exportation de Données :**
  - Exportez vos données de candidatures au format CSV, Excel ou PDF.

- **Notifications :**
  - Recevez des rappels pour les suivis selon les dates spécifiées.

## Statut Actuel

**Job Application Tracker** est actuellement en phase de développement. Les fonctionnalités principales comme l'importation de données, la visualisation et la gestion des thèmes sont déjà implémentées, mais des améliorations et corrections de bugs sont en cours pour améliorer l'expérience utilisateur et la robustesse du système.

### Ce qui fonctionne déjà

- Importation et exportation de données basiques.
- Visualisations initiales avec des graphiques en secteurs, linéaires, et nuages de points.
- Basculement entre les modes Clair et Sombre.
- Layout responsive compatible avec différents appareils.

### En cours de développement

- **Intégration des Paramètres :**
  - Intégration plus poussée avec macOS pour la gestion des préférences utilisateurs.
  - Panneau de paramètres complet avec options de gestion de compte.

- **Amélioration du Traitement des Données :**
  - Amélioration du parsing pour gérer une plus grande variété de formats de fichiers et de structures.
  - Gestion des erreurs robuste pour les colonnes de données manquantes ou mal formées.

- **Amélioration de l'Interface Utilisateur :**
  - Navigation affinée avec des boutons "Retour" fonctionnels.
  - Accessibilité et mécanismes de feedback utilisateur améliorés.

### Problèmes Connus

- **Bugs d'Importation :**
  - Difficultés à reconnaître certains formats de dates, entraînant des échecs d'importation.
  - Erreurs lors du chargement de fichiers avec des colonnes obligatoires manquantes.

- **Modal des Paramètres :**
  - Le panneau de paramètres manque actuellement d'options de configuration complètes.
  - La navigation retour depuis les paramètres n'est pas toujours fonctionnelle dans tous les contextes.

- **Visualisations :**
  - Certains graphiques peuvent ne pas se mettre à jour dynamiquement après des changements de données.

## Installation

Suivez ces étapes pour installer le projet en local :

1. **Clonez le dépôt :**
   ```bash
   git clone git@github.com:YasserELKAOUNI/job-application-tracker.git
   ```

2. **Installez les dépendances :**
   ```bash
   cd job-application-tracker
   npm install
   ```

3. **Démarrez le serveur de développement :**
   ```bash
   npm run dev
   ```

4. **Accédez à l'application :**
   Ouvrez votre navigateur et accédez à `http://localhost:5173` (ou le port spécifié par Vite).

## Utilisation

- **Importation de Données :**
  - Cliquez sur le bouton "Importer" dans l'interface principale.
  - Sélectionnez le fichier Excel, CSV ou JSON à importer.

- **Visualisation des Données :**
  - Les données importées sont affichées dans des graphiques et des tableaux dans l'interface principale.

- **Notifications :**
  - Configurez vos notifications dans les paramètres de l'application.

- **Exportation de Données :**
  - Exportez vos données de candidatures au format CSV, Excel ou PDF.

## Problèmes Connus

- **Bugs d'Importation :**
  - Difficultés à reconnaître certains formats de dates, entraînant des échecs d'importation.
  - Erreurs lors du chargement de fichiers avec des colonnes obligatoires manquantes.

- **Modal des Paramètres :**
  - Le panneau de paramètres manque actuellement d'options de configuration complètes.
  - La navigation retour depuis les paramètres n'est pas toujours fonctionnelle dans tous les contextes.

- **Visualisations :**
  - Certains graphiques peuvent ne pas se mettre à jour dynamiquement après des changements de données.

## Contribuer

Nous apprécions toutes contributions ! Si vous souhaitez améliorer l'application, veuillez suivre ces étapes :

1. **Fork le dépôt :**
   - Cliquez sur le bouton "Fork" en haut à droite de la page.

2. **Clonez votre fork :**



## Auteur

**Yasser** – Je suis diplômé en Data Science, avec un intérêt particulier pour le Data Engineering. Ce projet a commencé comme un **side-project** pour m'aider à mieux organiser mes candidatures pendant ma recherche d'emploi. Je fais aussi du développement web, car c'est un domaine qui m'intéresse et qui complète bien mon expertise en ingénierie des données.

Ce projet est un **work in progress**, conçu pour évoluer et s'améliorer avec le temps. J'ai choisi de le partager avec la communauté pour encourager les retours et les contributions, dans un esprit d'apprentissage continu et d'amélioration.


## Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
