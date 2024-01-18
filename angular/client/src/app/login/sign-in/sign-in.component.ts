import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

// import {
//   AuthService,
//   DialogUtil,
//   EMAIL_PATTERN,
//   ErrorUtil,
//   LoadService,
//   NoWhiteSpaceDirective,
// } from '../../shared';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  // providers: [NoWhiteSpaceDirective],
})
export class SignInComponent {
  loading = false;
  credentials: any = {};
  hide = true;
  invalidCredentials = false;
  // emailPattern = `${EMAIL_PATTERN}`;

  @ViewChild('email') email!: NgModel;
  @ViewChild('password') password!: NgModel;

  constructor(
    // private authService: AuthService,
    // private loadService: LoadService,
    private router: Router,
    // private dialog: DialogUtil,
  ) {}

  // login() {
  //   this.loadService.emitLoadEvent(true);

  //   this.authService.login(this.parseCredentials()).subscribe({
  //     next: (data) => {
  //       setTimeout(() => {
  //         this.loadService.emitLoadEvent(false);
  //       }, 2500);
  //       this.router.navigate(['/']);
  //     },
  //     error: (error) => {
  //       this.loadService.emitLoadEvent(false);

  //       if (error.status === 401) {
  //         this.email.control.setErrors({ credentials: true });
  //         this.password.control.setErrors({ credentials: true });
  //       } else {
  //         this.dialog.openErrorDialog(ErrorUtil.translateError('server'));
  //       }
  //     },
  //   });
  // }

  dataChanged() {
    if (this.email.control.hasError('credentials')) {
      this.email.control.setErrors(null);
    }

    if (this.password.control.hasError('credentials')) {
      this.password.control.setErrors(null);
    }
  }

  parseCredentials() {
    const auth: any = {
      email: this.credentials.email,
      password: this.credentials.password,
      rememberMe: !!this.credentials.rememberMe,
    };

    return auth;
  }
}
