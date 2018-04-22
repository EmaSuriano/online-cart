import styled from 'styled-components';
import { ThemePropTypes } from 'shared/constants/theme';

const InputText = styled.input.attrs({
  type: 'text',
})`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.light};
  border: none;
  border-radius: 3px;
`;

InputText.propTypes = {
  theme: ThemePropTypes,
};

InputText.displayName = 'InputText';

export default InputText;
