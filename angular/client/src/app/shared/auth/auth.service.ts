import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private $localStorage: LocalStorageService,
  ) {}

  storeAuthenticationToken(jwt: any) {
    this.$localStorage.store('token', jwt);
  }

  getAuthenticationToken() {
    return this.$localStorage.retrieve('token');
  }

  isAuthenticated(): boolean {
    if (this.getAuthenticationToken() && this.userService.getUser()) {
      return true;
    }

    return false;
  }

  authenticate(user: any, token: any) {
    this.storeAuthenticationToken(token);
    this.userService.storeAuthenticationUser(user);
  }


  
  login(credentials: any): Observable<any> {
    return this.apiService
      .post('/auth/login', credentials)
      .pipe(map(authenticateSuccess.bind(this)));

    function authenticateSuccess(this: any, resp: any) {
      if (resp && resp.token && resp.user) {
        this.storeAuthenticationToken(resp.token);
        this.userService.storeAuthenticationUser(resp.user);

        return true;
      }

      return false;
    }
  }

  logout() {
    return this.apiService.post('/auth/logout', {}).pipe(
      map(clearStorage.bind(this)),
      catchError((_) => {
        clearStorage.bind(this)();
        return EMPTY;
      }),
    );

    function clearStorage(this: any) {
      this.$localStorage.clear('user');
      this.$localStorage.clear('token');
    }
  }
}
