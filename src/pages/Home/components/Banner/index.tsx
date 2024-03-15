import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  BannerContainer,
  Image,
  Info,
  Title,
  Details,
  DetailsIcon,
  BannerContent,
} from './styles'
import CoffeeDeliveryMug from '../../../../../public/images/coffee-mug-banner.svg'
import BannerBackground from '../../../../../public/images/banner-bg.svg'
export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <Info>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </span>
          </Title>
          <Details>
            <div>
              <DetailsIcon iconColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </DetailsIcon>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <DetailsIcon iconColor="gray">
                <Package size={16} weight="fill" />
              </DetailsIcon>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <DetailsIcon iconColor="yellow">
                <Timer size={16} weight="fill" />
              </DetailsIcon>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <DetailsIcon iconColor="purple">
                <Coffee size={16} weight="fill" />
              </DetailsIcon>
              <span>O café chega fresquinho até você</span>
            </div>
          </Details>
        </Info>
        <Image src={CoffeeDeliveryMug} alt="Café do Coffee Delivery" />
      </BannerContent>
      <img src={BannerBackground} id="banner-bg" alt="" />
    </BannerContainer>
  )
}
