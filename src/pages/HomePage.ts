// src/pages/HomePage.ts
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productSort: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;
  readonly cartBadge: Locator;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productSort = page.locator('[data-test="product_sort_container"]');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
  }

  async applyFilter(option: 'lohi' | 'hilo') {
    await this.productSort.waitFor({ state: 'visible' });
    await this.productSort.selectOption(option);
  }

  async assertFilterLowToHigh() {
    const texts = await this.page.locator('.inventory_item_price').allTextContents();
    const nums = texts.map(t => parseFloat(t.replace('$', '')));
    const sorted = [...nums].sort((a, b) => a - b);
    expect(nums).toEqual(sorted);
  }

  async addToCart(index: number) {
    await this.addToCartButtons.nth(index).click();
  }

  async addToCartByIndex(index: number) {
    await this.addToCart(index);
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }

  async assertCartBadge(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
