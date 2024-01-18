import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  LoginComponent,
  SignInComponent,
  loginRoute,
  LoginService,
} from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    SignInComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(loginRoute)],
  providers: [LoginService],
})
export class LoginModule {}
