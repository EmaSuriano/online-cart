import { createSelector } from 'reselect';

// ACTIONS
const SET_CRITERIA = 'SET_CRITERIA';

export const actions = {
  SET_CRITERIA,
};

// REDUCER
export const INITIAL_PRICE = {
  min: 0,
  max: 999,
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
const getName = state => state.name || '';

const getPrice = state => state.price || INITIAL_PRICE;

const getCriteria = createSelector(getName, getPrice, (name, price) => ({
  name,
  price,
}));

const isFilterApplied = createSelector(
  getName,
  getPrice,
  (name, price) => !!name || price !== INITIAL_PRICE,
);

export const selectors = {
  getName,
  getPrice,
  getCriteria,
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
