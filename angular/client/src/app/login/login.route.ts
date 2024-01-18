import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const loginRoute: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      roles: [],
    },
    children: [
      {
        path: '',
        component: SignInComponent,
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];
