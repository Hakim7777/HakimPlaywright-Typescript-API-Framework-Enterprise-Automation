// src/utils/LoggerUtil.ts
export class Logger {
  static info(message: string): void {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }
  static error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }
  static debug(message: string): void {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
  }
  static step(message: string): void {
    this.info(message);
  }
}
