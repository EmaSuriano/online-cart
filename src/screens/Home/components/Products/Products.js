import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductItemListPropType } from 'shared/constants/customPropTypes';
import { Spinner, Message } from 'shared/components';
import ProductList from '../ProductList';

export default class Products extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(ProductItemListPropType),
    loading: PropTypes.bool,
    error: PropTypes.error,
  };

  static defaultProps = {
    products: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { loading, error, products } = this.props;
    return (
      (loading && <Spinner />) ||
      (error && <Message error>{`Error! ${error.message}`}</Message>) ||
      (products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <Message>There are no results that match your filters</Message>
      ))
    );
  }
}
