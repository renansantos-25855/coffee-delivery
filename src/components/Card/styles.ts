import { styled } from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  padding: 0 1.25rem 1.25rem;

  background: ${(props) => props.theme['base-card']};
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;

  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const CardImage = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  margin-top: -1.25rem;
`

export const Tags = styled.div`
  margin-top: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;

    border-radius: 100px;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    ${mixins.fonts.tag}
  }
`

export const Title = styled.h4`
  margin-top: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.span`
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  ${mixins.fonts.textS}
`

export const Control = styled.div`
  width: 13rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  > span {
    ${mixins.fonts.textS}
  }

  > h4 {
    ${mixins.fonts.titleM}
  }
`

export const Order = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    height: 2.375rem;
    width: 2.375rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;

    background: ${(props) => props.theme['purple-dark']};
  }
`
