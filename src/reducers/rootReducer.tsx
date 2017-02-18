import {combineReducers} from 'redux';
import specimenReducer from './specimenReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
  specimen: specimenReducer,
  group: groupReducer
});

export default rootReducer;
