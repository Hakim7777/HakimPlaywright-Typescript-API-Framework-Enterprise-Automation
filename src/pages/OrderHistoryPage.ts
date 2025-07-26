// src/pages/OrderHistoryPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class OrderHistoryPage {
  readonly page: Page;
  readonly orderList: Locator;
  readonly orderItems: Locator;
  readonly emptyMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // liste contenant toutes les commandes passées
    this.orderList     = page.locator('[data-test="order-history"]');
    // chaque élément de commande individuel
    this.orderItems    = this.orderList.locator('.order-item');
    // message affiché lorsqu’il n’y a aucune commande
    this.emptyMessage  = page.locator('[data-test="no-orders"]');
  }

  /** Navigue vers la page d’historique des commandes */
  async navigate() {
    await this.page.goto('/order-history.html');
    await this.orderList.waitFor({ state: 'visible' });
  }

  /** Renvoie le nombre de commandes listées */
  async getOrdersCount(): Promise<number> {
    return this.orderItems.count();
  }

  /**
   * Renvoie un résumé d’une commande (id, date, montant total)
   * @param index position dans la liste (0‑based)
   */
  async getOrderSummary(index: number): Promise<{ id: string; date: string; total: number }> {
    const item = this.orderItems.nth(index);
    const idText    = await item.locator('.order-id').textContent() ?? '';
    const dateText  = await item.locator('.order-date').textContent() ?? '';
    const totalText = (await item.locator('.order-total').textContent() ?? '').replace('$', '').trim();

    return {
      id:    idText.trim(),
      date:  dateText.trim(),
      total: parseFloat(totalText),
    };
  }

  /** Vérifie qu’il n’y a aucune commande dans l’historique */
  async expectNoOrders() {
    await expect(this.emptyMessage).toBeVisible();
  }

  /** Vérifie qu’au moins une commande est listée */
  async expectAtLeastOneOrder() {
    const count = await this.getOrdersCount();
    expect(count).toBeGreaterThan(0);
  }
}
