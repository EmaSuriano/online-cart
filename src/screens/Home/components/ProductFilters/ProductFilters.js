import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterBar, InputText, RangeSlider } from 'shared/components';
import { INITIAL_PRICE } from 'shared/ducks/search';

export default class ProductFilters extends Component {
  static propTypes = {
    setCriteria: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    price: INITIAL_PRICE,
  };

  onSubmit = () => this.props.setCriteria(this.state);

  onChangeName = ({ target: { value } }) => this.setState({ name: value });

  onChangePrice = price => this.setState({ price });

  render() {
    const { name, price } = this.state;
    return (
      <FilterBar onSubmit={this.onSubmit}>
        <InputText
          value={name}
          onChange={this.onChangeName}
          placeholder="NAME"
        />
        <RangeSlider value={price} onChange={this.onChangePrice} />
      </FilterBar>
    );
  }
}
