import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from 'shared/components';

const BarContainer = styled.div`
  background: ${props => props.theme.dark};
  color: ${props => props.theme.background};
  padding: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Button = styled.button`
  background: ${props => props.theme.accent};
  color: ${props => props.theme.background};
  border: 0;
  padding: 1em 2em;
  border-radius: 1.5em;
  cursor: pointer;
`;

const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default class FilterBar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    isFilterPanelOpened: false,
  };

  onSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit();
  };

  toggleFilterPanel = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    this.setState({ isFilterPanelOpened: !this.state.isFilterPanelOpened });
  };

  render() {
    return (
      <BarContainer>
        <TitleContainer>
          <Title fontSize="4" color="background" style={{ margin: 0 }}>
            Online Market
          </Title>
          <Button onClick={this.toggleFilterPanel}>
            {this.state.isFilterPanelOpened ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </TitleContainer>
        {this.state.isFilterPanelOpened && (
          <FilterForm onSubmit={this.onSubmitForm}>
            {this.props.children}
            <Button style={{ alignSelf: 'flex-end' }} align="right">
              Filter!
            </Button>
          </FilterForm>
        )}
      </BarContainer>
    );
  }
}
