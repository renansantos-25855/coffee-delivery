import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'
export const RadioContainer = styled.label`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  text-transform: uppercase;
  ${mixins.fonts.buttonM}
  transition: all 300ms;

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
