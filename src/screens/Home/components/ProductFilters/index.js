import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actionCreators, selectors } from 'shared/ducks';
import ProductFilters from './ProductFilters';

const { setCriteria, clearFilter } = actionCreators.search;

const mapStateToProps = createStructuredSelector({
  filtersInformation: selectors.search.getFiltersInformation,
});

const mapDispatchToProps = {
  setCriteria,
  clearFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilters);
