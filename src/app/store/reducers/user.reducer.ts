import { createReducer, on } from '@ngrx/store';
import * as user from '../actions';

export interface State {
    token: string;
  }

export const initialState: State = {
    token: null,
  };

const _userReducer = createReducer(
    initialState,

    on(user.setAuthToken, (state, { token }) => ({
        ...state,
        token
      })),

    on(user.unsetAuthToken, (state) => ({...state, token: null })),

);

export function userReducer(state, action) {
    return _userReducer(state, action);
  }
