import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class CheckUserlogedInService {
  private loggeduser$ = new BehaviorSubject<User | null>(null);
  public user$ = this.loggeduser$.asObservable();
  private isAdmin$ = new BehaviorSubject<boolean | null>(false);
  public Admin$ = this.isAdmin$.asObservable();

  constructor() {
    if (this.isLogedIn()) {
      const user = JSON.parse(localStorage.getItem('user')!);
      this.loggeduser$.next(user);
    }
  }

  setLoggedUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    if (user.isAdmin) {
      localStorage.setItem('isAdmin', JSON.stringify(user.isAdmin));
    }
    this.loggeduser$.next(user);
  }

  removeLoggedUser() {
    localStorage.removeItem('user');
    if (this.isAdmin()) {
      localStorage.removeItem('isAdmin');
    }
    this.loggeduser$.next(null);
  }
  isLogedIn() {
    return !!localStorage.getItem('user');
  }

  isAdmin() {
    return !!localStorage.getItem('isAdmin');
  }
}
