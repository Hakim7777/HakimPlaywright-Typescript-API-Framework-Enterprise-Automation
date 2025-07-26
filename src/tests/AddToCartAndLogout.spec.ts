// src/tests/AddToCartAndLogout.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Add to Cart and Logout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
  });

  test('ajouter un produit, vérifier badge puis logout', async ({ page }) => {
    await page.click('button[data-test^="add-to-cart-"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL(BASE_URL);
  });
});
