// src/tests/LoginDataDriven.spec.ts
import { test, expect } from '@playwright/test';
import testData from '../test-data/loginData.json';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Data‑Driven Login Tests', () => {
  for (const { user, pass, valid, error } of testData as Array<{user:string,pass:string,valid:boolean,error:string}>) {
    test(`login avec ${user}`, async ({ page }) => {
      await page.goto(BASE_URL);
      await page.fill('[data-test="username"]', user);
      await page.fill('[data-test="password"]', pass);
      await page.click('[data-test="login-button"]');
      if (valid) {
        await expect(page).toHaveURL(/inventory.html/);
      } else {
        await expect(page.locator('[data-test="error"]')).toContainText(new RegExp(error));
      }
    });
  }
});
