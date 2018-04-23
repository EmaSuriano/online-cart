import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemePropTypes } from 'shared/constants/theme';

const Picture = styled.img.attrs({
  atl: 'Product picture',
})`
  width: ${props => (props.adaptive ? '100%' : `${props.size}px`)};
  height: ${props => props.size}px;
  margin: auto;
  flex-shrink: 0;
  object-fit: cover;
`;

Picture.propTypes = {
  theme: ThemePropTypes,
  size: PropTypes.number.isRequired,
  adaptive: PropTypes.bool,
};

Picture.defaultProps = {
  adaptive: false,
};

Picture.displayName = 'Picture';

export default Picture;
