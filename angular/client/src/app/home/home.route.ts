import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { welcomeRoute } from './welcome/welcome.route';
import { dashboardRoute } from './dashboard/dashboard.route';

export const homeRoute: Route = {
  path: '',
  component: HomeComponent,
  data: {
    roles: [],
  },
  children: [
    welcomeRoute,
    dashboardRoute,
    {
      path: '',
      redirectTo: '/welcome',
      pathMatch: 'full'
    },
  ],
};
