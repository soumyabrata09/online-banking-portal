import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  }
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class AdminModule { }
