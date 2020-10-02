import { combineReducers } from 'redux';
import dataReducer from './data';
import filtersReducer from './filters';

export default combineReducers({
  dataReducer,
  filtersReducer,
});
