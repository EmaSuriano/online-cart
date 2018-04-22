import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterBar } from 'shared/components';

export default class ProductFilters extends Component {
  static propTypes = {
    setProductCriteria: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    price: {},
  };

  onSubmit = () => this.props.setProductCriteria(this.state);

  render() {
    return (
      <FilterBar onSubmit={this.onSubmit}>
        <input />
        <rangeSlider />
      </FilterBar>
    );
  }
}
