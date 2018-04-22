import { createSelector } from 'reselect';

// ACTIONS
const SET_CRITERIA = 'SET_CRITERIA';

export const actions = {
  SET_CRITERIA,
};

// REDUCER

const INITIAL_PRICE = {
  min: -1,
  max: -1,
};

const initialState = {
  name: '',
  price: INITIAL_PRICE,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CRITERIA:
      return {
        name: action.name,
        price: action.price,
      };
    default:
      return state;
  }
}

// SELECTORS
const getSearch = state => state.search;

const getName = createSelector(getSearch, search => search.name || '');

const getPrice = createSelector(
  getSearch,
  search => search.price || INITIAL_PRICE,
);

const isFilterApplied = createSelector(
  getName,
  getPrice,
  (name, price) => !!name || price !== INITIAL_PRICE,
);

export const selectors = {
  getName,
  getPrice,
  isFilterApplied,
};

// ACTION CREATORS
const setCriteria = ({ name, price }) => ({
  type: SET_CRITERIA,
  name,
  price,
});

export const actionCreators = {
  setCriteria,
};
