import { createSelector } from 'reselect';

// ACTIONS
const SET_CRITERIA = 'SET_CRITERIA';
const CLEAR_FILTER = 'CLEAR_FILTER';

export const actions = {
  SET_CRITERIA,
};

// REDUCER
export const INITIAL_PRICE = {
  min: 0,
  max: 1000,
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
    case CLEAR_FILTER:
      return {
        ...state,
        [action.filter]: initialState[action.filter],
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

const isDefaultPrice = price =>
  price.min === INITIAL_PRICE.min && price.max === INITIAL_PRICE.max;

const isFilterApplied = createSelector(
  getName,
  getPrice,
  (name, price) => !!name || !isDefaultPrice(price),
);

const getFiltersInformation = createSelector(
  getName,
  getPrice,
  (name, price) => {
    const result = [];
    if (name) {
      result.push({
        key: 'name',
        label: 'Name',
        value: `"${name}"`,
      });
    }
    if (!isDefaultPrice(price)) {
      result.push({
        key: 'price',
        label: 'Price',
        value: `from ${price.min} to ${price.max}`,
      });
    }
    return result;
  },
);

export const selectors = {
  getFiltersInformation,
  getCriteria,
  isFilterApplied,
};

// ACTION CREATORS
const setCriteria = ({ name, price }) => ({
  type: SET_CRITERIA,
  name,
  price,
});

const clearFilter = filter => ({
  type: CLEAR_FILTER,
  filter,
});

export const actionCreators = {
  setCriteria,
  clearFilter,
};
