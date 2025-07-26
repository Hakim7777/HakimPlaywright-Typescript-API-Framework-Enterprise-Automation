// src/tests/FilterHighToLow.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Filter Products High to Low', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
  });

  test('apply Price (high to low) filter and verify sorting', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'hilo');
    const prices = await page.$$eval('.inventory_item_price', els =>
      els.map(e => parseFloat(e.textContent!.replace('$', '')))
    );
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });
});
