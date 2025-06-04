import { createAction, props } from '@ngrx/store';

/* export const AccountsActions = createActionGroup({
  source: 'Accounts',
  events: {
    'Load Accountss': emptyProps(),
    'Load Accountss Success': props<{ data: unknown }>(),
    'Load Accountss Failure': props<{ error: unknown }>(),
  }
}); */

export const loadAccounts = createAction('[Accounts] Load Accounts');
export const loadAccountSuccess = createAction('[Accounts] Load Accounts Success', props<{ accounts: any[] }>());
export const loadAccountsFailure = createAction('[Accounts] Load Acounts Failure', props<{ error: any }>());
