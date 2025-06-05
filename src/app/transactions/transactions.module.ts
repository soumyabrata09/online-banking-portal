import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

const routes: Routes = [
  {
    path: '', component: TransactionsComponent,
    children: [
      {
        path: '', component: TransactionsListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TransactionsRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class TransactionsModule { }
