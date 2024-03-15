import styled from 'styled-components'

export const CoffeeList = styled.div`
  max-width: 1440px;

  display: flex;
  flex-direction: column;

  gap: 3.375rem;

  margin: 0 auto;
  padding: 3rem 6.625rem;
  > h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 3.5rem 3rem;
  }

  @media (max-width: 1336px) {
    > div {
      grid-template-columns: repeat(3, auto);
    }
  }

  @media (max-width: 998px) {
    > div {
      grid-template-columns: repeat(2, auto);
    }
  }
`
