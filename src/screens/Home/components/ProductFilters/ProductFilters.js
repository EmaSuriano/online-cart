import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterBar, InputText } from 'shared/components';
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

  render() {
    return (
      <FilterBar onSubmit={this.onSubmit}>
        <InputText
          value={this.state.name}
          onChange={this.onChangeName}
          placeholder="NAME"
        />
        {/* <rangeSlider /> */}
      </FilterBar>
    );
  }
}
