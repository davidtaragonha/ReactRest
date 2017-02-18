import {LOAD_GROUPS} from '../actions/groupAction';
import {GroupActionI, GroupViewI} from '../actions/groupAction';

export interface GroupStateI {
    list: Array<GroupViewI>;
};

export const groupInitialState: GroupStateI = {
  list: []
};

export default function groupReducer(state: GroupStateI = groupInitialState, action: GroupActionI): GroupStateI {
  switch (action.type) {
    case LOAD_GROUPS:
      return Object.assign({}, state, {list: action.groups});
    default:
      return state;
  }
}
