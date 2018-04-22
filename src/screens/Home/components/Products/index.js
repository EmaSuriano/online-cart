import { connect } from 'react-redux';
import { actionCreators, selectors } from 'shared/ducks';
import { createStructuredSelector } from 'reselect';
import Products from './Products';

const mapStateToProps = createStructuredSelector({
  loading: selectors.products.isLoading,
  products: selectors.getFilteredProducts,
});

const mapDispatchToProps = {
  fetchProducts: actionCreators.products.fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
