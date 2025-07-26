import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly title: Locator;
  readonly description: Locator;
  readonly price: Locator;
  readonly addButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page        = page;
    this.title       = page.locator('.inventory_details_name');
    this.description = page.locator('.inventory_details_desc');
    this.price       = page.locator('.inventory_details_price');
    this.addButton   = page.locator('[data-test^="add-to-cart"]');
    this.backButton  = page.locator('[data-test="back-to-products"]');
  }

  async assertDetailsVisible() {
    await expect(this.title).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.description).toBeVisible();
  }

  async addToCart() {
    await this.addButton.click();
  }

  async goBack() {
    await Promise.all([
      this.page.waitForURL('**/inventory.html'),
      this.backButton.click(),
    ]);
  }
}
