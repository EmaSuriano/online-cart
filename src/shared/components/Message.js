import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemePropTypes } from 'shared/constants/theme';

const Message = styled.p`
  color: ${props =>
    props.error ? props.theme.error : props.theme[props.color]};
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  font-size: ${props => props.fontSize};
`;

Message.propTypes = {
  theme: ThemePropTypes,
  color: PropTypes.string,
  bold: PropTypes.bool,
  fontSize: PropTypes.string,
  error: PropTypes.bool,
};

Message.defaultProps = {
  color: 'light',
  bold: false,
  error: false,
  fontSize: 'inherit',
};

Message.displayName = 'Message';

export default Message;
