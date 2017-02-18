import {LOAD_SPECIMENS} from '../actions/specimenAction';
import {SpecimenActionI, SpecimenViewI} from '../actions/specimenAction';

export interface SpecimenStateI {
    list: Array<SpecimenViewI>;
};

export const specimenInitialState: SpecimenStateI = {
  list: []
};

export default function specimenReducer(state: SpecimenStateI = specimenInitialState, action: SpecimenActionI): SpecimenStateI {
  switch (action.type) {
    case LOAD_SPECIMENS:
      return Object.assign({}, state, {list: action.specimens});
    default:
      return state;
  }
}
