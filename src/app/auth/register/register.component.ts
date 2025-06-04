import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.initRegistrationForm();
  }

  private initRegistrationForm(): void { 
    this.registerForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.maxLength(6) ]]
    });
  }

  onSubmit(): void { 
    alert('Registration Successful, Now Login.');
  }
}
