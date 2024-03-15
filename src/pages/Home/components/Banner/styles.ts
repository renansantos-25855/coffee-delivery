import { styled } from 'styled-components'

export const BannerContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 3rem;

  img#banner-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  overflow: hidden;
`

export const BannerContent = styled.div`
  display: flex;
  gap: 4.125rem;

  @media (max-width: 1226px) {
    flex-direction: column-reverse;
  }
`

export const Info = styled.div`
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: ${(props) => props.theme['text-lg']};
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const IconColor = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
}

export interface IconColorProps {
  iconColor: keyof typeof IconColor
}

export const DetailsIcon = styled.div<IconColorProps>`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme[IconColor[props.iconColor]]};
  color: ${(props) => props.theme.background};
`

export const Image = styled.img`
  height: 22.5rem;
  width: 29.75rem;
`
