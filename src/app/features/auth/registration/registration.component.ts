import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../services/auth.service';
import { UsedEmailComponent } from '../used-email/used-email.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  RegisterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    score: new FormControl(0),
    isAdmin: new FormControl(false, [Validators.required]),
  });
  signUp() {
    const newUser: User = this.RegisterForm.value as User;
    this.authService.signUp(newUser).subscribe((res) => {
      if (res == null) {
        this.openSnackBar();
      } else {
        this.RegisterForm.reset();
        this.router.navigateByUrl('auth/login');
      }
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(UsedEmailComponent, {
      duration: 3000,
    });
  }
}
