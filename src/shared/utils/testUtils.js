import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from 'shared/ducks';

export const createMockStore = (reducers = allReducers) =>
  createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk)),
  );

export const flushAllPromises = () =>
  new Promise(resolve => setImmediate(resolve));
