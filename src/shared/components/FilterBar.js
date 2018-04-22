import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterBar = ({ children, onSubmit }) => {
  const onSubmitForm = evt => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={onSubmitForm}>
      {children}
      <button>Filter</button>
    </form>
  );
};

FilterBar.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FilterBar;
