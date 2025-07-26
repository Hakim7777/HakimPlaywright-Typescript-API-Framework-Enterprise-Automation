import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly addButtons: Locator;
  readonly cartIcon: Locator;
  readonly filterSelect: Locator;

  constructor(page: Page) {
    this.page         = page;
    this.title        = page.locator('.title');
    this.addButtons   = page.locator('[data-test^="add-to-cart"]');
    this.cartIcon     = page.locator('.shopping_cart_link');
    this.filterSelect = page.locator('[data-test="product_sort_container"]');
  }

  async assertOnProductsPage() {
    await expect(this.title).toHaveText('Products');
  }

  async addToCartByIndex(index: number) {
    await this.addButtons.nth(index).click();
  }

  async navigateToCart() {
    await Promise.all([
      this.page.waitForURL('**/cart.html'),
      this.cartIcon.click(),
    ]);
  }

  async applyFilter(option: 'lohi' | 'hilo') {
    await this.filterSelect.selectOption(option);
  }
}
