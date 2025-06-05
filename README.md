@octocat :ninja # OnlineBankingPortal

@octocat :ninja @octocat :ninja @octocat :ninja @octocat :ninja
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

> [!INFO]
> ```text
> Admin User: john_doe@admin.com
> Admin Pwd: johndoe1234
>
> Normal User: johhny_bravo@user.com
> Normal User Pwd: user1234
> ```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources
This is a sample Angular project which demonstrated the state management using NgRx.

### State Management With NgRx
This project uses NgRx for state management, leveraging its Store, Effects, Actions, Reducers, and Selectors to maintain a scalable, predictable, and maintainable application state.

### Why NgRx?
As Angular applications grow, managing state (data shared between components, UI state, API responses, etc.) becomes complex. NgRx provides a single source of truth for state, making it easier to:

- Predict and debug state changes

- Share data between components

- Handle side effects (like API calls) in a clear, testable way

- Maintain and scale large applications

### Key Concepts

#### Store:
The Store holds the entire application state in an immutable object tree and components can subscribe to the Store to get updates and trigger changes via Actions.

#### Actions:
Actions are plain objects describing "what happened" in the app. They are dispatched by components or services to signal state changes or trigger side effects.

```typescript
// src/app/store/actions/items.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Items] Load Items');
export const loadItemsSuccess = createAction(
  '[Items] Load Items Success',
  props<{ items: string[] }>()
);
export const loadItemsFailure = createAction(
  '[Items] Load Items Failure',
  props<{ error: any }>()
);

```

#### Reducers:
Reducers are pure functions that take the current state and an action, and return a new state. They define how actions transform the state.

```typescript
// src/app/store/reducers/items.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ItemsActions from '../actions/items.actions';

export interface ItemsState {
  items: string[];
  loading: boolean;
  error: any;
}

export const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null
};

export const itemsReducer = createReducer(
  initialState,
  on(ItemsActions.loadItems, state => ({ ...state, loading: true })),
  on(ItemsActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false
  })),
  on(ItemsActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

```

#### Selectors:
Selectors are functions for querying specific slices of the state from the Store. They help components access only the data they need and improve performance by memoizing results.

```typescript
// src/app/store/selectors/items.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemsState } from '../reducers/items.reducer';

export const selectItemsState = createFeatureSelector<ItemsState>('items');

export const selectAllItems = createSelector(
  selectItemsState,
  (state: ItemsState) => state.items
);

export const selectItemsLoading = createSelector(
  selectItemsState,
  (state: ItemsState) => state.loading
);

```

#### Effects:
Effects handle side effects, such as API calls or navigation. They listen for specific actions and perform tasks outside the Store, then dispatch new actions with the results.

```typescript
// src/app/store/effects/items.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ItemsActions from '../actions/items.actions';
import { ItemsService } from '../../services/items.service';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      mergeMap(() =>
        this.itemsService.getItems().pipe(
          map(items => ItemsActions.loadItemsSuccess({ items })),
          catchError(error => of(ItemsActions.loadItemsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}
}

```

#### Example Workflow
1. Component dispatches an action (e.g loadItems).
2. Effect listens for the action and triggers an API Call.
3. Effect then dispatches a success or failure action with the subsequent API result.
4. Reducers updates the state based on the action.
5. Selectors then extracts the updated state for Components to use.

```text
src/
  store/
    actions/
    reducers/
    selectors/
    effects/
    models/

```

#### Further Reading

> [!TIP]
> [NgRx Official Documentation](https://ngrx.io/)

> [!TIP]
> [Step-by-Step Guide for NgRx with Angular (dev.to)](https://dev.to/codecraftjs/step-by-step-guide-for-ngrx-with-angular-16-30jd)

> [!TIP]
> [Angular State Management with NgRx (Syncfusion)](https://www.syncfusion.com/blogs/post/angular-state-management-ngrx)

> [!TIP]
> [NgRx Store and Effects Crash Course (Angular University)](https://blog.angular-university.io/angular-ngrx-store-and-effects-crash-course/)

> [!TIP]
> [NgRx for Beginners (YouTube)](https://www.youtube.com/watch?v=HILmsGiYC-Q)

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
