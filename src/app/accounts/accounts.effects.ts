import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AccountsActions from './accounts.actions';
import { AccountsService } from './accounts.service';


@Injectable()
export class AccountsEffects {

  loadAccounts$;

  constructor(private actions$: Actions, private accountsService: AccountsService) { 
    this.loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActions.loadAccounts),
      mergeMap(() =>
        this.accountsService.getAccounts().pipe(
          map(accounts => AccountsActions.loadAccountSuccess({ accounts })),
          catchError(error => of(AccountsActions.loadAccountsFailure({ error })))
        )
      )
    )
  );
  }

}