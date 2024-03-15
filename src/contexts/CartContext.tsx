import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Item, Order, cartReducer } from '../reducers/Cart/reducer'
import {
  addItemAction,
  checkoutAction,
  decrementItemAmountAction,
  incrementItemAmountAction,
  removeItemAction,
} from '../reducers/Cart/actions'
import { useNavigate } from 'react-router-dom'
import { OrderInfo } from '../pages/Cart'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  incrementItemAmount: (itemId: Item['id']) => void
  decrementItemAmount: (itemId: Item['id']) => void
  removeItem: (itemId: Item['id']) => void
  checkoutNewOrder: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CoffeeProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedCartState = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedCartState) {
        return JSON.parse(storedCartState)
      }

      return cartState
    },
  )

  const navigate = useNavigate()

  function addItem(coffee: Item) {
    dispatch(addItemAction(coffee))
  }

  function incrementItemAmount(itemId: number) {
    dispatch(incrementItemAmountAction(itemId))
  }

  function decrementItemAmount(itemId: number) {
    dispatch(decrementItemAmountAction(itemId))
  }

  function removeItem(itemId: number) {
    dispatch(removeItemAction(itemId))
  }

  function checkoutNewOrder(item: OrderInfo) {
    dispatch(checkoutAction(item, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        orders: cartState.orders,
        addItem,
        incrementItemAmount,
        decrementItemAmount,
        removeItem,
        checkoutNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
