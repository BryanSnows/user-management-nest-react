import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserRouteAccessService  {
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const roles = route.data['roles'];
    return this.checkLogin(roles);
  }

  canLoad(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  checkLogin(roles: any): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    if (roles && roles.length && !this.userService.hasAnyRole(roles)) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
