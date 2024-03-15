import { Check, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  CardImage,
  Control,
  Description,
  Price,
  Tags,
  Title,
  Order,
} from './styles'
import { QuantityInput } from '../Forms/QuantityInput'
import { useTheme } from 'styled-components'
import { useContext, useState } from 'react'
import { Coffee } from '../../pages/Home'
import { CartContext } from '../../contexts/CartContext'

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const [amount, setAmount] = useState<number>(1)
  const [isItemAdded, setIsItemAdded] = useState<boolean>(false)

  const theme = useTheme()
  const { addItem } = useContext(CartContext)

  function increaseProductAmount() {
    setAmount((state) => state + 1)
  }

  function decreaseProductAmount() {
    if (amount > 1) {
      setAmount((state) => state - 1)
    }
  }

  function addCoffeeToBag(selectedCoffee: Coffee) {
    addItem({ id: selectedCoffee.id, amount })
    setIsItemAdded(true)
    setAmount(1)
  }

  return (
    <CardContainer>
      <CardImage src={coffee.image} alt={`Foto do café: ${coffee.name}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Title>{coffee.name}</Title>
      <Description>
        <span>{coffee.description}</span>
      </Description>

      <Control>
        <Price>
          <span>R$</span>
          <h4>{coffee.price.toFixed(2).replace('.', ',')}</h4>
        </Price>
        <Order>
          <QuantityInput
            amount={amount}
            increaseAmount={increaseProductAmount}
            decreaseAmount={decreaseProductAmount}
          />
          <button onClick={() => addCoffeeToBag(coffee)}>
            {isItemAdded ? (
              <Check size={22} color={theme['base-card']} weight="bold" />
            ) : (
              <ShoppingCart
                size={22}
                color={theme['base-card']}
                weight="fill"
              />
            )}
          </button>
        </Order>
      </Control>
    </CardContainer>
  )
}
