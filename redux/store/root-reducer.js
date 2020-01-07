import { combineReducers } from 'redux';

// Reducers
import { reddit } from '../reddit/reducers/index';
import { ui } from '../ui/reducers/index';

export const rootReducer = combineReducers({
  reddit,
  ui,
});
