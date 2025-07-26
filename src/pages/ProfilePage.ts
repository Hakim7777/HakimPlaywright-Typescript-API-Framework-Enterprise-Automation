import { Page, Locator, expect } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutLink: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page          = page;
    this.profileButton = page.locator('#react-burger-menu-btn');
    this.logoutLink    = page.locator('#logout_sidebar_link');
    this.title         = page.locator('.title');
  }

  async openMenu() {
    await this.profileButton.click();
  }

  async logout() {
    await Promise.all([
      this.page.waitForURL('**/login.html'),
      this.logoutLink.click(),
    ]);
  }

  async assertOnProfilePage() {
    await expect(this.title).toBeVisible();
  }
}
