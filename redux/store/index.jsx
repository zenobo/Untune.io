import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// Initial States
import { INITIAL_STATE as RedditInitialState } from '../reddit/types/initialState';
import { INITIAL_STATE as UIInitialState } from '../ui/types/initialState';

// Initial state of the root Redux store
const INITIAL_STATE = {
  reddit: RedditInitialState,
  ui: UIInitialState,
};

const initStore = (initialState = INITIAL_STATE) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default initStore;
