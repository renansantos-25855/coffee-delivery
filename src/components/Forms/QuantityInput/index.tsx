import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  amount: number
  increaseAmount: () => void
  decreaseAmount: () => void
}

export function QuantityInput({
  amount,
  increaseAmount,
  decreaseAmount,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={decreaseAmount}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{amount}</span>
      <button onClick={increaseAmount}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityInputContainer>
  )
}
