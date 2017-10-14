import { combineReducers } from 'redux';
import ListReducer from './list-reducer';
const rootReducer = combineReducers({
  list: ListReducer
});

export default rootReducer;
