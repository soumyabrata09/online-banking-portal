import { createFeature, createReducer, on } from '@ngrx/store';
import * as AccountsActions from './accounts.actions';

export const accountsFeatureKey = 'accounts';

export interface AccountsState {
  accounts: any[];
  error: any;
}

export const initialState: AccountsState = {
  accounts: [],
  error: null
};

export const accountsReducer = createReducer(
  initialState,
  /* on(AccountsActions.loadAccounts, state => state),
  on(AccountsActions.loadAccountssSuccess, (state, action) => state),
  on(AccountsActions.loadAccountssFailure, (state, action) => state), */
  on(AccountsActions.loadAccountSuccess, (state, { accounts }) => ({ ...state, accounts })),
  on(AccountsActions.loadAccountsFailure, (state, { error }) => ({ ...state, error }))
);

/* export const accountsFeature = createFeature({
  name: accountsFeatureKey,
  reducer,
}); */

