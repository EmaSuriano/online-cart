import { connect } from 'react-redux';
import { actionCreators as productActionCreators } from 'shared/ducks/products';
import ProductList from './ProductList';

const { fetchProducts } = productActionCreators;

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(null, mapDispatchToProps)(ProductList);
