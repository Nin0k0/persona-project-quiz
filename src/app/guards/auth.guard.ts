import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckUserlogedInService } from '../shared/services/check-userloged-in.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private checkUser: CheckUserlogedInService,
    private router: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.checkUser.isLogedIn() == false) {
      this.router.navigateByUrl('auth');
    }
    return this.checkUser.isLogedIn();
  }
}
