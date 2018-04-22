import { createSelector } from 'reselect';
import { getProductList } from '../constants/services';

// ACTIONS
const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const actions = {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
};

// REDUCER
const initialState = {
  loading: false,
  error: false,
  payload: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...initialState,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        payload: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
}

// SELECTORS
const getReducer = state => state.products; //remove this pls

const isLoading = createSelector(getReducer, reducer => reducer.loading);

const getError = createSelector(getReducer, reducer => reducer.error);

const getData = createSelector(
  getReducer,
  isLoading,
  getError,
  (reducer, loading, broken) => (!loading && !broken && reducer.data) || {},
);

export const selectors = {
  getReducer,
  getError,
  getData,
};

// ACTION CREATORS
export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

export const fetchProductsSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

export const fetchProducts = () => async dispatch => {
  dispatch(fetchProductsPending());
  try {
    const response = await getProductList();
    debugger;
    dispatch(fetchProductsSuccess(response));
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
};

export const actionCreators = {
  fetchProducts,
};
