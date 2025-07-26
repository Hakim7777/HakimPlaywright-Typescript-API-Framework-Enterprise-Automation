import CryptoJS from 'crypto-js';

export class CryptojsUtil {
  static encrypt(text: string, key: string): string {
    return CryptoJS.AES.encrypt(text, key).toString();
  }

  static decrypt(cipher: string, key: string): string {
    const bytes = CryptoJS.AES.decrypt(cipher, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
