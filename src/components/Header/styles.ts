import { styled } from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  max-width: 1440px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 2rem 6.625rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseButton = styled.button`
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 8px;
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  a {
    height: 2.375rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 8px;

    position: relative;
    width: 2.375rem;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    > span {
      position: absolute;
      height: 1.25rem;
      width: 1.25rem;

      top: 0;
      right: 0;
      transform: translate(0.5rem, -0.5rem);

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 100%;

      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      ${mixins.fonts.textS}
      font-weight: bold;
    }
  }
`

export const LocationButton = styled(BaseButton)`
  height: 2.375rem;
  min-width: 9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 8px;

  padding: 0.5rem;
  gap: 0.25rem;

  font-size: ${(props) => props.theme['text-sm']};

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`
