import { createSelector } from 'reselect';
import { getProductList } from 'shared/constants/services';

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
  products: [],
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
        products: action.payload.products,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
}

// SELECTORS
const isLoading = state => state.loading;

const getError = state => state.error;

const getProducts = createSelector(
  state => state.products,
  isLoading,
  getError,
  (products, loading, broken) => (!loading && !broken && products) || [],
);

export const selectors = {
  isLoading,
  getError,
  getProducts,
};

// ACTION CREATORS
export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: new Error(error),
  error: true,
});

export const fetchProducts = () => async dispatch => {
  dispatch(fetchProductsPending());
  try {
    const response = await getProductList();
    dispatch(fetchProductsSuccess(response.products));
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
};

export const actionCreators = {
  fetchProducts,
};
