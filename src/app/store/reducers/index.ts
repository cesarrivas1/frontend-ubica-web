import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as ui from './ui.reducer';
import * as user from './user.reducer';
import * as aplicants from './aplicants.reducer';

export interface AppState {
    ui: ui.State;
    user: user.State;
    aplicants: aplicants.State;
}

export const reducers: ActionReducerMap<AppState> = {
    ui: ui.uiReducer,
    user: user.userReducer,
    aplicants: aplicants.aplicantsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];
