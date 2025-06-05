import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  users = [
    { 
      id: 1, 
      name: 'Admin User', 
      email: 'john_doe@admin.com', 
      role: 'Admin' 
    },
    { 
      id: 2, 
      name: 'Customer User', 
      email: 'johhny_bravo@user.com', 
      role: 'Customer' 
    }
  ];
}
