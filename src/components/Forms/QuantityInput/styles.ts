import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 0.75rem;
  border-radius: 8px;

  background: ${(props) => props.theme['base-button']};

  > button {
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button svg {
    color: ${(props) => props.theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${(props) => props.theme['base-title']};
  }
`
