import { test, expect } from '@playwright/test';

test.skip('vérifier l’en-tête du rapport HTML', async ({ page }) => {
  // 1) Démarrer d'abord le serveur de rapport :
  //    npx playwright show-report --port 9323
  await page.goto('http://localhost:9323/');
  // 2) La page doit avoir un title contenant "Report"
  await expect(page).toHaveTitle(/Report/);
});
