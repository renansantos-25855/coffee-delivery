import { Aside, HeaderContainer, LocationButton } from './styles'
import CoffeeDeliveryLogo from '../../../public/images/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useCart()

  const itemsAmount = cart.reduce(
    (accumulator, currentItem) => {
      accumulator.amount += currentItem.amount
      return accumulator
    },
    { id: 0, amount: 0 },
  ).amount

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </Link>
      <Aside>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </LocationButton>
        <Link to="cart" aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {itemsAmount > 0 && <span>{itemsAmount}</span>}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
