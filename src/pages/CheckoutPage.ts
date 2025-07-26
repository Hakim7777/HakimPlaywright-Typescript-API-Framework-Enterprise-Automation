import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page           = page;
    this.firstName      = page.locator('[data-test="firstName"]');
    this.lastName       = page.locator('[data-test="lastName"]');
    this.postalCode     = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async fillCheckoutForm(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
  }

  async continue() {
    await Promise.all([
      this.page.waitForURL('**/checkout-step-two.html'),
      this.continueButton.click(),
    ]);
  }
}
