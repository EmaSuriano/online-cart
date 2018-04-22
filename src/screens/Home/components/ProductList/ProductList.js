import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <p>Product List</p>
      </div>
    );
  }
}
