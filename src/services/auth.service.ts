import { UserType } from "../config/auth";
import { LocalStorageService } from "./localStorage.service";
import data from '../server/auth.json';

export class AuthService {
  users: UserType[] = [];
  storage: LocalStorageService;

  constructor() {
    this.storage = new LocalStorageService();
    this.users = data.logins;
  }
 
  isUserCorrect(user: string, pwd: string, genToken = true) {
    for (let usr of this.users) {
        if (usr.user === user && usr.pwd === pwd) {
          if (genToken) {
            this.storage.generateToken();
            this.storage.saveUser(usr.user);
          }
          return true;
        }
    }
    return false;
  }

  getUser() {
    return this.storage.getUser();
  }

  logout() {
    this.storage.unsetToken();
  }

  hasToken() {
    return this.storage.getToken() !== null;
  }
}