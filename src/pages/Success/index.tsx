import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import SuccessImage from '../../../public/images/success-image.svg'
import {
  Header,
  Container,
  SuccessContainer,
  DetailsContainer,
  DetailsContent,
} from './styles'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export function Success() {
  const theme = useTheme()

  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <SuccessContainer>
      <Header>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Header>
      <Container>
        <DetailsContainer>
          <DetailsContent>
            <div>
              <MapPin
                color={theme.white}
                size={32}
                style={{ backgroundColor: theme.purple }}
                weight="fill"
              />
              <div>
                <span>
                  Entrega em <strong>{orderInfo.street}</strong>
                </span>
                <span>
                  {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
                </span>
              </div>
            </div>
            <div>
              <Timer
                color={theme.white}
                size={32}
                style={{ backgroundColor: theme.yellow }}
                weight="fill"
              />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div>
              <CurrencyDollar
                color={theme.white}
                size={32}
                style={{ backgroundColor: theme['yellow-dark'] }}
                weight="fill"
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </DetailsContent>
        </DetailsContainer>
        <div>
          <img src={SuccessImage} alt="" />
        </div>
      </Container>
    </SuccessContainer>
  )
}
