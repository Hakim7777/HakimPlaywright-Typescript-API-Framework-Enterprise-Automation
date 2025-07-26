# 🚀 Projet Playwright TypeScript Enterprise Automation Framework
--
[![Playwright Tests](https://img.shields.io/badge/Playwright-Test-blue)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](#)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
-
Bienvenue dans mon **Playwright TypeScript Enterprise Automation Framework** ! Ce projet a pour objectif d’automatiser l’UI et les API de [SauceDemo](https://www.saucedemo.com) et de proposer une structure prête pour l’entreprise.

## 📋 Table des matières

- 🔧 Installation
- ▶️ Exécution des tests
- 📂 Structure du projet
- ✅ Test cases
- 🤝 Contribuer
- 📄 Licence
- 🔗 Suivez-moi sur LinkedIn

---

## 🔧 Installation

```bash
# Clonez le dépôt
git clone https://github.com/Hakim7777/HakimPlaywright-Typescript-Framework-Enterprise-Automation.git
cd HakimPlaywright-Typescript-Framework-Enterprise-Automation

# Installez les dépendances
npm install
```

## ▶️ Exécution des tests

```bash
# Tests UI + API sur tous les navigateurs
npx playwright test

# Rapport HTML
npx playwright show-report
```

---

## 📂 Structure du projet

```
├── src/
│   ├── api/                # Tests API isolés
│   ├── pages/              # Page Objects
│   ├── tests/              # Scénarios de tests UI
│   ├── utils/              # Helpers (logger, etc.)
│   └── test-data/          # Données JSON de tests
├── screenshots/            # Captures & vidéos des tests
├── playwright-report/      # Rapport HTML généré
├── .github/workflows/      # CI/CD GitHub Actions
└── README.md               # Ce fichier
```

---

## ✅ Test cases

| Fichier de test                    | Description                           |
| ---------------------------------- | ------------------------------------- |
| `src/tests/LoginTest.spec.ts`      | Connexion avec identifiants invalides |
| `src/tests/LoginLockedOut.spec.ts` | Scénario utilisateur bloqué           |
| `src/tests/CheckoutError.spec.ts`  | Erreur de champs obligatoires         |
| …                                  | …                                     |

*(Liste complète dans `docs/test-cases.md` à venir)*

---

## 🤝 Contribuer

1. Forkez ce dépôt
2. Créez votre branche (`git checkout -b feature/ma-feature`)
3. Commitez vos changements (`git commit -m 'Ajouter une feature'`)
4. Poussez (`git push origin feature/ma-feature`)
5. Ouvrez une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT.

---

## 🔗 Retrouve-moi sur LinkedIn

🔹 [Abdelhakim SAHRAOUI](https://www.linkedin.com/in/hakim-alaoui-sahraoui-5a397a169/)

