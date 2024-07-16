import { StorageKeys } from '../config/storage';

export class LocalStorageService {
  authToken = '';

  makeString(length: number) {
    let res = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;
    for (let i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * charsLength));
    } 
    return res;
  }
 
  generateToken() {
    this.authToken = this.makeString(20);
    localStorage.setItem(StorageKeys.TOKEN, `Bearer ${this.authToken}`);
  }

  saveUser(username: string) {
    localStorage.setItem(StorageKeys.USER, username);
  }

  getToken() {
    return localStorage.getItem(StorageKeys.TOKEN);
  }

  getUser() {
    return localStorage.getItem(StorageKeys.USER);
  }

  unsetToken() {
    localStorage.removeItem(StorageKeys.TOKEN);
    localStorage.removeItem(StorageKeys.USER);
  }
}