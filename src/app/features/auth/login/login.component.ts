import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { CheckUserlogedInService } from 'src/app/shared/services/check-userloged-in.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loggedService: CheckUserlogedInService
  ) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    const loginUser: User = this.loginForm.value as unknown as User;

    this.authService.login(loginUser).subscribe((data) => {
      if (data) {
        this.loggedService.setLoggedUser(loginUser);
        this.loginForm.reset();
        this.router.navigateByUrl('');
      } else {
        alert('Invalid Login');
      }
    });
  }
}
