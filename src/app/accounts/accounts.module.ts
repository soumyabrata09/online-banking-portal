import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: AccountsListComponent }
];

@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule
  ]
})

export class AccountsModule { }
