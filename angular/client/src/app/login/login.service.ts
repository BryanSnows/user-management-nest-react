import { Injectable } from '@angular/core';
import { ApiService } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apiService: ApiService) {}

  forgotPassword(email: string) {
    return this.apiService.post('/auth/forgot-password', {
      email,
    });
  }

  resetPassword(body: { key: string | undefined; password: string }) {
    return this.apiService.post('/auth/reset-password', body);
  }
}
