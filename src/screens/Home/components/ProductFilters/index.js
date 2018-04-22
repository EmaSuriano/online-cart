import { connect } from 'react-redux';
import { actionCreators as searchActionCreators } from 'shared/ducks/search';
import ProductFilters from './ProductFilters';

const { setCriteria } = searchActionCreators;

const mapDispatchToProps = {
  setCriteria,
};

export default connect(null, mapDispatchToProps)(ProductFilters);
