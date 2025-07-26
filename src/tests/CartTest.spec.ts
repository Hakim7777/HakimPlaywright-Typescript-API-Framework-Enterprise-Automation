// src/tests/CartTest.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Cart Badge & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
  });

  test('ajouter au panier et vérifier le badge', async ({ page }) => {
    await page.click('button[data-test^="add-to-cart-"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('naviguer vers la page panier', async ({ page }) => {
    await page.click('button[data-test^="add-to-cart-"]');
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart.html/);
  });
});
