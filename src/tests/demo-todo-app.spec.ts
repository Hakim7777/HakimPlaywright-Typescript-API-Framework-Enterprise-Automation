// src/tests/demo-todo-app.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Demo To‑Do App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('should add, complete and remove a todo item', async ({ page }) => {
    const newTodo = page.locator('.new-todo');
    await newTodo.fill('Buy milk');
    await newTodo.press('Enter');

    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first()).toHaveText('Buy milk');

    await todoItems.first().locator('.toggle').check();
    await expect(todoItems.first()).toHaveClass(/completed/);

    await todoItems.first().locator('.destroy').hover();
    await todoItems.first().locator('.destroy').click();
    await expect(todoItems).toHaveCount(0);
  });
});
