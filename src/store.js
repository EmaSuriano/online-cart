import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'shared/ducks';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
