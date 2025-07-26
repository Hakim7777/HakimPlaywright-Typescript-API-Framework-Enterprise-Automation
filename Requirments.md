**Entreprise Test Automation Framework**
**Auteur :** Abdelhakim Sahraoui, QA Automation Engineer
**Date :** 26 juillet 2025

**1. Objectif du projet**
Framework Playwright TS structuré POM couvrant :

* UI Testing (login, filtres, panier, checkout…)
* Data‑Driven Testing (JSON, CSV)
* Cross‑Browser (Chromium, Firefox, WebKit)
* Logging & Tracing
* Captures (screenshot, vidéo, trace)
* CI/CD (GitHub Actions)

**2. Arborescence**

```
.
├── .github/             # workflows CI
├── src/
│   ├── pages/           # POM
│   ├── tests/           # specs Playwright
│   └── test-data/       # loginData.json, CSV
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── requirements.md
```

**3. Page Objects**

* LoginPage: navigate, login, getErrorMessage
* ProductsPage: applyFilter, getAllPrices, addToCartByIndex, getCartBadgeCount, openCart, logout
* CartPage: checkout, removeItem
* CheckoutPage: fillCustomerInfo, continue, cancel
* ConfirmationPage: assertOrderComplete

**4. Specs de tests**

* LoginTest, LoginDataDriven, LoginLockedOut, LogoutTest
* FilterTest (lohi), FilterHighToLow (hilo)
* CartTest, RemoveFromCart, AddToCartAndLogout
* FullE2ETest, CheckoutError
* demo-todo-app, example

**5. Test‑Data**
`loginData.json`

```json
[
  {"user":"standard_user","pass":"secret_sauce","valid":true,"error":""},
  {"user":"locked_out_user","pass":"secret_sauce","valid":false,"error":"Epic sadface: Sorry, this user has been locked out."},
  {"user":"invalid_user","pass":"wrong","valid":false,"error":"Epic sadface: Username and password do not match any user in this service"}
]
```

**6. Config Playwright**

* `retries: 2` pour flakiness
* `screenshot: only-on-failure`, `video: retain-on-failure`, `trace: on-first-retry`
* timeout global 60s, action 10s, nav 30s
* projects: chromium, firefox, webkit

**7. CI/CD**
**.github/workflows/playwright.yml**

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chromium, firefox, webkit]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: node-version: '18'
      - run: npm ci
      - name: Run tests
        run: npx playwright test --project=${{ matrix.browser }}
      - name: Upload HTML report
        run: npx playwright show-report --reporter=html
```

**8. Couverture**

* Ajouter Istanbul/nyc
* `npx nyc npm test` + `nyc report --reporter=html`

**9. Tests complémentaires**

* Filters A→Z, Z→A
* Panier : quantités multiple, suppression
* Flux “Cancel” checkout
* Profil & Order History pages
* Performance tests (`performance_glitch_user`)

**10. Documentation & Qualité**

* README: setup, commands, structure
* Conventions Git (commit, branching)
* Sélecteurs robustes & self-healing

**11. Prochaines étapes**

1. Valider CI/CD vert
2. Générer couverture & publier badge
3. Itérer sur tests complémentaires
4. Automatisation quotidienne & monitoring

*A bientot , Hakim sahraoui*
