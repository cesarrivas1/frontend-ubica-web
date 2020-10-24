import { createAction, props } from '@ngrx/store';

export const setAuthToken = createAction(
    '[AuthToken] setAuthToken',
    props<{token: string}>()
  );

export const unsetAuthToken = createAction('[AuthToken] unsetAuthToken');
