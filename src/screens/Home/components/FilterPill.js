import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PillContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.accent};
  color: ${props => props.theme.background};
  padding: 0 1em;
  font-size: 0.8em;
  border-radius: 1.5em;
  margin-left: 1em;
`;

const CloseIcon = styled.span`
  background: none;
  border: 0;
  margin-bottom: 25px;
  color: ${props => props.theme.background};
  cursor: pointer;
`;

const FilterPill = ({ label, value, onClick }) => (
  <PillContainer>
    <p>{`${label} > ${value}`}</p>
    <CloseIcon onClick={onClick}>x</CloseIcon>
  </PillContainer>
);

FilterPill.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

FilterPill.defaultProps = {
  onClick: () => false,
};

export default FilterPill;
