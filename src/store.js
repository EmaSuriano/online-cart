import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import search from 'shared/ducks/search';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    search,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
