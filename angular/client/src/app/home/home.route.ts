import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';

import { HomeComponent } from './home.component';
import { welcomeRoute } from './welcome/welcome.route';

export const homeRoute: Route = {
  path: '',
  component: HomeComponent,
  data: {
    roles: [],
  },
  canActivate: [UserRouteAccessService],
  children: [
    welcomeRoute,
    {
      path: '',
      redirectTo: '/welcome',
      pathMatch: 'full'
    },
  ],
};
