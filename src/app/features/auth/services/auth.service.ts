import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  signUp(user: User) {
    return this.http.post<User>(this.localURL, user);
  }
  private getUserByEmail(email: string): Observable<User | null> {
    return this.http
      .get<User[]>(`${this.localURL}?email=${email}`)
      .pipe(map((response) => response[0] || null));
  }
  login(user: User) {
    return this.getUserByEmail(user.email).pipe(
      map((userInDB) => {
        console.log(userInDB);
        console.log(user);
        if (userInDB === null) {
          return null;
        }
        if (user.password === userInDB.password) {
          return user;
        }
        return null;
      })
    );
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.localURL}/${user.id}`, user);
  }
}
