Bien reçu ✅ Voici un **README 100 % PRO**, complet, élégant, prêt pour GitHub, LinkedIn, et CV. Il inclut **badges**, **test cases**, **structure**, **CI/CD (GitHub Actions + Jenkins)**, et **liens utiles**.

---

### 📝 README.md – Version complète à 100 %

````markdown
# 🚀 Playwright TypeScript Enterprise Automation Framework

[![Playwright Tests](https://img.shields.io/badge/Playwright-Test-blue)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)
[![Jenkins Build](https://img.shields.io/badge/Jenkins-Build%20Passing-brightgreen)](https://localhost:8080) <!-- lien à modifier si build public -->
[![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-blue)](.github/workflows/playwright.yml)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

> ⚙️ Projet conçu pour démontrer une automatisation complète E2E (UI + API) avec **Playwright**, **TypeScript**, **Node.js**, et **CI/CD via GitHub Actions & Jenkins**. Ce framework est prêt à l’emploi pour des environnements professionnels.

---

## 📋 Table des matières

- 🔧 [Installation](#-installation)
- ▶️ [Exécution des tests](#️-exécution-des-tests)
- 📂 [Structure du projet](#-structure-du-projet)
- ✅ [Cas de test](#-cas-de-test)
- 🔄 [CI/CD intégré](#-cicd-intégré)
- 🤝 [Contribuer](#-contribuer)
- 📄 [Licence](#-licence)
- 🔗 [Profil LinkedIn](#-profil-linkedin)

---

## 🔧 Installation

```bash
# Clonez le dépôt
git clone https://github.com/Hakim7777/HakimPlaywright-Typescript-API-Framework-Enterprise-Automation.git
cd HakimPlaywright-Typescript-API-Framework-Enterprise-Automation

# Installez les dépendances
npm install

# (Optionnel) Installez les navigateurs Playwright
npx playwright install --with-deps
````

---

## ▶️ Exécution des tests

```bash
# Lancer tous les tests UI + API
npx playwright test

# Lancer un test spécifique
npx playwright test src/tests/LoginTest.spec.ts

# Afficher le rapport HTML après l'exécution
npx playwright show-report
```

---

## 📂 Structure du projet

```
├── src/
│   ├── api/                # Tests API REST
│   ├── pages/              # Page Objects (POM)
│   ├── tests/              # Scénarios UI
│   ├── utils/              # Fonctions réutilisables (logger, wait, etc.)
│   └── test-data/          # Données de tests (fichiers JSON)
├── .github/workflows/      # Fichiers GitHub Actions
├── playwright-report/      # Rapport HTML
├── screenshots/            # Captures et vidéos de tests
├── Jenkinsfile             # Pipeline Jenkins CI/CD
└── README.md               # Documentation du projet
```

---

## ✅ Cas de test

| Fichier                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `LoginTest.spec.ts`       | Authentification valide / invalide               |
| `LoginLockedOut.spec.ts`  | Erreur d’un utilisateur bloqué                   |
| `CheckoutError.spec.ts`   | Validation des champs obligatoires               |
| `CheckoutSuccess.spec.ts` | Scénario complet de commande (E2E)               |
| `CartTest.spec.ts`        | Ajout & suppression d’articles dans le panier    |
| `FilterTest.spec.ts`      | Filtres produits par prix croissant/alphabétique |
| `ApiStatus.spec.ts`       | Vérification de la disponibilité API `/status`   |
| `ApiLogin.spec.ts`        | Authentification API (POST `/login`)             |
| `ApiProducts.spec.ts`     | Récupération de produits API (GET `/products`)   |

---

## 🔄 CI/CD intégré

### ✅ GitHub Actions

* Exécution automatique à chaque `push` ou `pull request`
* Rapport HTML généré automatiquement
* Config dans `.github/workflows/playwright.yml`

### ✅ Jenkins CI/CD

* Pipeline défini dans `Jenkinsfile`
* Étapes :

  * Cloner le repo
  * `npm ci` + `npx playwright install`
  * Lancer tous les tests
  * Publier le rapport HTML
  * Archiver screenshots & vidéos

---

## 🤝 Contribuer

1. Forkez ce repo
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez (`git commit -m "Ajout d'une fonctionnalité"`)
4. Poussez (`git push origin feature/ma-feature`)
5. Ouvrez une **Pull Request**

---

## 📄 Licence

Ce projet est sous licence MIT.
Consultez le fichier [LICENSE](LICENSE) pour plus d’informations.

---

## 🔗 Profil LinkedIn

🔹 [Abdelhakim SAHRAOUI](https://www.linkedin.com/in/hakim-alaoui-sahraoui-5a397a169/)


```
