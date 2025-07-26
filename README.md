# HakimPlaywright-Typescript-API-Framework-Enterprise-Automation

[![Playwright Tests](https://img.shields.io/badge/Playwright-Test-blue)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](#)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## 🚀 Présentation

**HakimPlaywright-Typescript-API-Framework-Enterprise-Automation** est un framework d'automatisation de tests UI et API, développé en **TypeScript** et basé sur **Playwright**. Conçu pour les environnements **Entreprise** et **CI/CD**, il offre :

* 🔹 Tests fonctionnels UI cross‑browser (Chromium, Firefox, WebKit)
* 🔹 Tests API REST modulaires et réutilisables
* 🔹 Génération de rapports HTML détaillés avec traces, captures et vidéos
* 🔹 Intégration continue via **GitHub Actions**
* 🔹 Structure projet scalable : POM, utils, test‑data

## 📁 Structure du projet

```
├── src/tests
│   ├── api            # Tests API (ReqRes)
│   └── ui             # Tests UI (Saucedemo)
├── pages             # Page Objects
├── utils             # Fonctions utilitaires
├── test-data         # Fichiers de données JSON
├── playwright.config.ts
├── package.json
└── .github/workflows  # CI GitHub Actions
```

## ⚙️ Installation

```bash
# Cloner le repository
git clone git@github.com:Hakim7777/HakimPlaywright-Typescript-API-Framework-Enterprise-Automation.git
cd HakimPlaywright-Typescript-API-Framework-Enterprise-Automation

# Installer les dépendances
npm ci

# Installer les navigateurs Playwright
npx playwright install --with-deps
```

## ▶️ Exécution des tests

```bash
# Lancer tous les tests UI + API
npx playwright test

# Lancer uniquement les tests API
npx playwright test --project=api

# Lancer uniquement les tests UI (cross-browser)
npx playwright test --project=chromium,firefox,webkit
```

## 📊 Rapports

```bash
# Générer et afficher le rapport HTML
npx playwright show-report --port=9323
```

## 🔧 Intégration CI (GitHub Actions)

Le workflow `.github/workflows/playwright.yml` comprend :

* Exécution matrix cross‑browser
* Publication des artefacts (reports, traces)

## 🤝 Contribution

Contributions bienvenues ! Merci de :

1. Forker le projet
2. Créer une branche `feature/...`
3. Commit clair et descriptif
4. Ouvrir une Pull Request détaillée

## 📄 License

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE).

## 📬 Contact

Projet personnel par Hakim Sahraoui – (mailto:hakimsahraoui.de@gmail.com)
