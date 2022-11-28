import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class CheckUserlogedInService {
  private loggeduser$ = new BehaviorSubject<User | null>(null);
  public user$ = this.loggeduser$.asObservable();

  constructor() {
    if (this.isLogedIn()) {
      const user = JSON.parse(localStorage.getItem('user')!);
      this.loggeduser$.next(user);
    }
  }

  setLoggedUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggeduser$.next(user);
  }

  removeLoggedUser() {
    localStorage.removeItem('user');
    this.loggeduser$.next(null);
  }
  isLogedIn() {
    return !!localStorage.getItem('user');
  }
}
