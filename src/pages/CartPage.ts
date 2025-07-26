import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly removeButtons: Locator;

  constructor(page: Page) {
    this.page           = page;
    this.title          = page.locator('.title');
    this.cartItems      = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.removeButtons  = page.locator('[data-test^="remove"]');
  }

  async assertOnCartPage() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async removeItemByIndex(index: number) {
    await this.removeButtons.nth(index).click();
  }

  async proceedToCheckout() {
    await Promise.all([
      this.page.waitForURL('**/checkout-step-one.html'),
      this.checkoutButton.click(),
    ]);
  }
}
