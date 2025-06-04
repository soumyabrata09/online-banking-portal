import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRoles = route.data['roles'];
  const userRole = authService.getRole();
  if (!expectedRoles.includes(userRole)) {
    router.navigate(['/dashboard']);
    return false;
  }
  return true;
};
