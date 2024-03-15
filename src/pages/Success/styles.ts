import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SuccessContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;

  padding: 2rem 6.625rem;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const Container = styled.div`
  display: flex;
  gap: 6.375rem;
`
export const DetailsContainer = styled.div`
  width: 100%;

  border-radius: 6px 36px;

  border: 1px solid transparent;

  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`
export const DetailsContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: white;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
  > div div {
    display: flex;
    flex-direction: column;
  }
`
