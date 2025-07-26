// src/utils/SelfHealingUtil.ts
export class SelfHealingUtil {
  static async clickWithRetry(page: any, selector: string, retries = 3): Promise<void> {
    for (let i = 0; i < retries; i++) {
      try {
        await page.click(selector);
        return;
      } catch (e) {
        if (i === retries - 1) throw e;
        await page.waitForTimeout(500);
      }
    }
  }
}
