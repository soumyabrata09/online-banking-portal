import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  getAccounts(): Observable<any[]> {
    return of([
      { id: 1, iban: 'ABCD1234', balance: 5000 },
      { id: 1, iban: 'WVXYZ9876', balance: 3200 }
    ]);
  }

  getAccount(accountId: number): Observable<any> {
    return this.getAccounts()
      .pipe(
        map(accounts => accounts.find(account => account.id === accountId))
      );
  }
}
