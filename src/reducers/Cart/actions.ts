import { NavigateFunction } from 'react-router-dom'
import { OrderInfo } from '../../pages/Cart'
import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_AMOUNT = 'INCREMENT_ITEM_AMOUNT',
  DECREMENT_ITEM_AMOUNT = 'DECREMENT_ITEM_AMOUNT',
  CHECKOUT = 'CHECKOUT',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.REMOVE_ITEM
        | ActionTypes.INCREMENT_ITEM_AMOUNT
        | ActionTypes.DECREMENT_ITEM_AMOUNT
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT
      payload: { order: OrderInfo; callback: NavigateFunction }
    }

export function addItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { item },
  } satisfies Actions
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}
export function incrementItemAmountAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  } satisfies Actions
}
export function decrementItemAmountAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function checkoutAction(order: OrderInfo, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}
