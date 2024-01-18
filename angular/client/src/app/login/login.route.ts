import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';

export const loginRoute: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      roles: [],
    },
    children: [
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];
