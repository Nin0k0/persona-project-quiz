import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChoiceComponent } from './choice/choice.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ChoiceComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
