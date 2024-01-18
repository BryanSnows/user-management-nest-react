import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService, DialogUtil } from '..';

@Injectable({
  providedIn: 'root',
})
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        const router: Router = this.injector.get(Router);

        if (
          router.url &&
          !router.url.startsWith('/login') &&
          err.status === 401
        ) {
          const authService: AuthService = this.injector.get(AuthService);

          authService.logout();
          this.expiredSession();
        }

        return throwError(() => err);
      }),
    );
  }

  expiredSession() {
    const router: Router = this.injector.get(Router);
    const dialogUtil: DialogUtil = this.injector.get(DialogUtil);

    router.navigate(['login']);
    setTimeout(() => {
      dialogUtil.openErrorDialog('error.session');
    }, 1000);
  }
}
