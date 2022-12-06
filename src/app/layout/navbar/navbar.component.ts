import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUserlogedInService } from 'src/app/shared/services/check-userloged-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private checkUserLogin: CheckUserlogedInService,
    private router: Router
  ) {}
  user$ = this.checkUserLogin.user$;
  admin$ = this.checkUserLogin.Admin$;

  logOut() {
    this.checkUserLogin.removeLoggedUser();
    this.router.navigateByUrl('home');
  }
  ngOnInit(): void {}
}
