import { applyMiddleware, createStore, Action } from 'redux';

import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { RootState } from './rootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'production') {
  //   middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
