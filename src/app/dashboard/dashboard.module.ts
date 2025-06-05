import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class DashboardModule { }
