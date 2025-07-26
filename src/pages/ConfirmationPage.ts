import { Page, Locator, expect } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  readonly title: Locator;
  readonly finishButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page           = page;
    this.title          = page.locator('.title');
    this.finishButton   = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
  }

  async assertOnOverview() {
    await expect(this.title).toHaveText('Checkout: Overview');
  }

  async finishOrder() {
    await Promise.all([
      this.page.waitForURL('**/checkout-complete.html'),
      this.finishButton.click(),
    ]);
  }

  async assertOrderComplete() {
    await expect(this.successMessage).toHaveText('THANK YOU FOR YOUR ORDER');
  }
}
