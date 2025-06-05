import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactions(): Observable<any[]> {
    return of([
      { 
        id: 1, 
        date: '2025-06-01', 
        type: 'CREDIT', 
        amount: 50000, 
        description: 'Salary' 
      },
      { 
        id: 2, 
        date: '2025-06-03', 
        type: 'DEBIT', 
        amount: 1200, 
        description: 'Groceries' 
      }
    ]);
  }
}
