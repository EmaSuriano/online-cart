import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from 'shared/ducks';

const createMockStore = (reducers = allReducers) => {
  return createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk)),
  );
};
export { createMockStore };
