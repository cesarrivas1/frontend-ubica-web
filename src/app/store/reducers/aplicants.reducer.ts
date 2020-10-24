import { createReducer, on } from '@ngrx/store';
import * as aplicants from '../actions';
import { IAplicantsEntity } from '../../shared/models/IAplicantsEntity';

export interface State {
    aplicants: IAplicantsEntity[];
    aplicant: IAplicantsEntity[];

  }

export const initialState: State = {
    aplicants: [],
    aplicant: [],

  };

const _aplicantsReducer = createReducer(
    initialState,

    on(aplicants.setAplicants, (state, { aplicants }) => ({
        ...state,
        aplicants
      })),

    on(aplicants.setAplicantSelect, (state, { aplicant }) => ({
        ...state,
        aplicant
    })),

    on(aplicants.unsetAplicants, (state) => ({...state, aplicants: null })),
    on(aplicants.unsetAplicants, (state) => ({...state, aplicants: null })),


);

export function aplicantsReducer(state, action) {
    return _aplicantsReducer(state, action);
}
