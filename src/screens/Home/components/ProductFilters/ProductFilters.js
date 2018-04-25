import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterBar, InputText, RangeSlider } from 'shared/components';
import { INITIAL_PRICE } from 'shared/ducks/search';
import styled from 'styled-components';
import { Message } from '../../../../shared/components';
import FilterPill from '../FilterPill';

const FilterContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
`;

export default class ProductFilters extends Component {
  static propTypes = {
    setCriteria: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired,
    filtersInformation: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    filtersInformation: [],
  };

  state = {
    name: '',
    price: INITIAL_PRICE,
  };

  onSubmit = () => this.props.setCriteria(this.state);

  onChangeName = ({ target: { value } }) => this.setState({ name: value });

  onChangePrice = price => this.setState({ price });

  render() {
    const { filtersInformation } = this.props;
    const { name, price } = this.state;
    return (
      <FilterBar onSubmit={this.onSubmit}>
        <Message fontSize="2em">Filters</Message>
        <div>
          <FilterContainer>
            <Message>Product Name</Message>
            <InputText value={name} onChange={this.onChangeName} />
          </FilterContainer>
          <FilterContainer>
            <Message>Price Range</Message>
            <RangeSlider value={price} onChange={this.onChangePrice} />
          </FilterContainer>
        </div>
        {filtersInformation.length > 0 && (
          <div>
            <FilterContainer>
              <Message>Selected Filters </Message>
              {filtersInformation.map(filter => (
                <FilterPill
                  key={filter.key}
                  {...filter}
                  onClick={() => this.props.clearFilter(filter.key)}
                />
              ))}
            </FilterContainer>
          </div>
        )}
      </FilterBar>
    );
  }
}
