import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }

  login(email: string, password: string): boolean {
    if (email === 'john_doe@admin.com' && password === 'johndoe1234') {
      if (this.isBrowser) {
        localStorage.setItem('jwt', JSON.stringify({ role: 'Admin', email }));
      }
      return true;
    }
    if (email === 'johhny_bravo@user.com' && password === 'user1234') {
      if (this.isBrowser) {
        localStorage.setItem('jwt', JSON.stringify({ role: 'Customer', email }));
      }
      return true;
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('jwt');
    }
  }

  getRole(): string | null {
    if (this.isBrowser) {
      const jwt = localStorage.getItem('jwt');
      return jwt ? JSON.parse(jwt).role : null;
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (this.isBrowser) {
      return !!localStorage.getItem('jwt');
    }
    return false;
  }
}
