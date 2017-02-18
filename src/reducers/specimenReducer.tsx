import {LOAD_SPECIMENS} from '../actions/specimenAction';
import {SpecimenActionI} from '../actions/specimenAction';
import initialState, {SpecimenStateI} from '../store/initialState';

export default function specimenReducer(state: SpecimenStateI = initialState, action: SpecimenActionI): SpecimenStateI {
  switch (action.type) {
    case LOAD_SPECIMENS:
      return Object.assign({}, state, {list: action.specimens});
    default:
      return state;
  }
}
