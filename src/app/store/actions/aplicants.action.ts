import { createAction, props } from '@ngrx/store';
import { IAplicantsEntity } from '../../shared/models/IAplicantsEntity';

export const setAplicants = createAction(
    '[ListAplicants] setAplicants',
    props<{aplicants: IAplicantsEntity[]}>()
  );

export const setAplicantSelect = createAction(
    '[AplicantSelect] setAplicantSelect',
    props<{aplicant: IAplicantsEntity[]}>()
  );



export const unsetAplicants = createAction('[ListAplicants] unsetAplicants');
export const unsetAplicantSelect = createAction('[AplicantSelect] unsetAplicantSelect');