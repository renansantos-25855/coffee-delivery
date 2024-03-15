import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CartContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  padding: 3.5rem 6.625rem;

  > div:first-child {
    flex: 1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    ${mixins.fonts.titleXS}
    padding: 1rem 0;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const FormBase = styled.div`
  padding: 2.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const Address = styled(FormBase)`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const Header = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      ${mixins.fonts.textS}
    }
  }
`

export const AddressHeader = styled(Header)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressBody = styled.div`
  padding-top: 2rem;

  display: grid;
  grid-template-areas:
    'zipcode . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem 0.75rem;
`

export const Payment = styled(FormBase)`
  > header {
    display: flex;
    gap: 0.5rem;

    > div {
      display: flex;
      flex-direction: column;

      span {
        ${mixins.fonts.textM}
      }

      p {
        ${mixins.fonts.textS}
      }
    }
  }
`

export const PaymentHeader = styled(Header)`
  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const PaymentBody = styled.div`
  display: flex;
  gap: 0.5rem;

  padding-top: 2rem;
`

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem;
    gap: 1.25rem;
    img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      span {
        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  aside {
    span {
      ${mixins.fonts.textM}
      font-weight: bold;
    }
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 6px 8px;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    > svg {
      color: ${(props) => props.theme.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const CartTotal = styled(FormBase)`
  width: 28rem;

  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;

  > span {
    display: block;
    height: 1px;
    background: ${(props) => props.theme['base-button']};
    margin: 1.5rem 0;
  }
`
export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & span:first-child {
      ${mixins.fonts.textS}
    }
  }

  & > div:last-child {
    span {
      ${mixins.fonts.textL}
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const CheckoutButton = styled.button`
  width: 100%;

  margin-top: 1.5rem;
  padding: 0.5rem 1rem;

  border-radius: 6px;

  background: ${(props) => props.theme.yellow};

  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  ${mixins.fonts.buttonG}

  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
