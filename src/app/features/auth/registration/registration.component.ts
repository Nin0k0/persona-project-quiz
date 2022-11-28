import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  RegisterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    isAdmin: new FormControl(false, [Validators.required]),
  });
  signUp() {
    const newUser: User = this.RegisterForm.value as User;
    this.authService.signUp(newUser).subscribe((res) => console.log(res));
    this.RegisterForm.reset();
    this.router.navigateByUrl('auth/login');
  }
}
