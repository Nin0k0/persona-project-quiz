import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChoiceComponent } from './choice/choice.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ChoiceComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
