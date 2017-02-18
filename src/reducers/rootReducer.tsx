import {combineReducers} from 'redux';
import specimenReducer from './specimenReducer';

const rootReducer = combineReducers({
  specimen: specimenReducer
});

export default rootReducer;
