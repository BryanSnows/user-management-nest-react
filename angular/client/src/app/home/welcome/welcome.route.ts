import { Route } from '@angular/router';
import { UserRouteAccessService } from 'src/app/shared';
import { WelcomeComponent } from './welcome.component';

export const welcomeRoute: Route = {
  path: 'welcome',
  component: WelcomeComponent,
  data: {
    authorities: [],
  },
  canActivate: [UserRouteAccessService],
  children: [],
};
