// src/tests/LoginLockedOut.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Locked Out User Login', () => {
  test('locked_out_user should see locked out error', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('[data-test="username"]', 'locked_out_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });
});
