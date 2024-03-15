import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'
import { OrderInfo } from '../../pages/Cart'

export interface Item {
  id: number
  amount: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyInCart = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyInCart) {
          itemAlreadyInCart.amount += action.payload.item.amount
        } else {
          draft.cart.push(action.payload.item)
        }
      })
    case ActionTypes.INCREMENT_ITEM_AMOUNT:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )
        if (itemToIncrement) {
          itemToIncrement.amount = itemToIncrement.amount + 1
        }
      })
    case ActionTypes.DECREMENT_ITEM_AMOUNT:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )
        if (itemToDecrement && itemToDecrement.amount !== 0) {
          itemToDecrement.amount = itemToDecrement.amount - 1
        }
      })
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemove = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        draft.cart.splice(itemToRemove, 1)
      })
    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }

        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })
    default:
      return state
  }
}
