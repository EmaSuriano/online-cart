import { combineReducers } from 'redux';
import { combineSelectors } from 'combine-selectors-redux';
import { createSelector } from 'reselect';
import products, * as productsDuck from './products';
import search, * as searchDuck from './search';
import filterByCriteria from '../utils/filterByCriteria';

export default combineReducers({
  products,
  search,
});

const combinedSelectors = combineSelectors({
  products: productsDuck.selectors,
  search: searchDuck.selectors,
});

// This is where all the magic takes place!
const getFilteredProducts = createSelector(
  combinedSelectors.products.getProducts,
  combinedSelectors.search.getCriteria,
  combinedSelectors.search.isFilterApplied,
  (productList, criteria, isFilterApplied) =>
    isFilterApplied
      ? productList.filter(filterByCriteria(criteria))
      : productList,
);

// Selectors composition FTW
export const selectors = {
  ...combinedSelectors,
  getFilteredProducts,
};

export const actionCreators = {
  products: productsDuck.actionCreators,
  search: searchDuck.actionCreators,
};
