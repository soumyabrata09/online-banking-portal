import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-banking-portal';

  constructor(public authService: AuthService, private readonly router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
