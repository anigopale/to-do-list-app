import { combineReducers } from 'redux';
import ListReducer from './list-reducer';
import Pending from './pending-reducer';
import Completed from './completed-reducer';

const rootReducer = combineReducers({
  list: ListReducer,
  pending: Pending,
  completed: Completed
});

export default rootReducer;
