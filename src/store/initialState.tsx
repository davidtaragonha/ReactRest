import {groupInitialState, GroupStateI} from '../reducers/groupReducer';
import {specimenInitialState, SpecimenStateI} from '../reducers/specimenReducer';

export interface StateI {
    specimen: SpecimenStateI;
    group: GroupStateI;
};

export default {
  specimen: specimenInitialState,
  group: groupInitialState
};
