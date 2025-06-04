import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  error = '';
  loginForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router) {
      this.initLoginForm();
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    if (this.authService.login(email, password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid Credentials';
    }
  }
}
