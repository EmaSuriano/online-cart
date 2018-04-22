import PropTypes from 'prop-types';

export const ThemePropTypes = PropTypes.shape({
  background: PropTypes.string,
  dark: PropTypes.string,
  disabled: PropTypes.string,
  accent: PropTypes.string,
  secondary: PropTypes.string,
});

export default {
  background: '#EEEEEE',
  dark: '#222831',
  disabled: '#BFC0C0',
  accent: '#00ADB5',
  secondary: '#393E46',
  error: '#ff3333',
};
