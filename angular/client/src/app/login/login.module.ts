import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  LoginComponent,
  SignInComponent,
  loginRoute,
} from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(loginRoute)],
  providers: [],
})
export class LoginModule {}
