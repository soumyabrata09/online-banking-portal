import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAccounts } from '../accounts.actions';
import { selectAccounts } from '../accounts.selectors';

@Component({
  selector: 'app-accounts-list',
  standalone: false,
  templateUrl: './accounts-list.component.html',
  styleUrl: './accounts-list.component.scss'
})
export class AccountsListComponent implements OnInit {

  // accounts: any[]= [];
  accounts$: Observable<any> | undefined;

  constructor(private readonly accountsService: AccountsService, private store: Store) { }

  ngOnInit(): void {
    this.accounts$ = this.store.select(selectAccounts);
    /* this.accountsService.getAccounts().subscribe({
      next: data => this.accounts = data
    }); */
    this.store.dispatch(loadAccounts());
  }
}