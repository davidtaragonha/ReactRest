import {LOAD_SPECIMENS_SUCCESS} from '../actions/specimenAction';
import {SpecimenActionI} from '../actions/specimenAction';
import initialState from '../store/initialState';

export default function specimenReducer(state = initialState.specimen, action: SpecimenActionI): Object {
  switch (action.type) {
    case LOAD_SPECIMENS_SUCCESS:
      return action.specimens;
    default:
      return state;
  }
}
