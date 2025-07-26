// src/tests/Report.spec.ts
import { test, expect } from '@playwright/test';

test('vérifier l’en-tête du rapport HTML', async ({ page }) => {
  // 1) Démarrer d'abord le serveur de rapport :
  //    npx playwright show-report --port 9323
  await page.goto('http://localhost:9323/');

  // 2) La page doit avoir un title contenant "Report"
  await expect(page).toHaveTitle(/Report/);

  // 3) Et on vérifie qu'un <h1> est visible (c'est le titre de la page)
  await expect(page.locator('h1')).toBeVisible();
});
