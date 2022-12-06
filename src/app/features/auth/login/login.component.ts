import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { CheckUserlogedInService } from 'src/app/shared/services/check-userloged-in.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { InvalidSnackbarComponent } from 'src/app/shared/components/invalid-snackbar/invalid-snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loggedService: CheckUserlogedInService,
    private snackBar: MatSnackBar
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
        this.router.navigateByUrl('leaderboard');
      } else {
        this.openSnackBar();
      }
    });
  }
  openSnackBar() {
    this.snackBar.openFromComponent(InvalidSnackbarComponent, {
      duration: 3000,
    });
  }
}
