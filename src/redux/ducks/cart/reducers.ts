import {CartAction, CartActionTypes, CartState} from './types'
import {Reducer} from 'redux'

const initialState: CartState = {
  isOpen: false
}

export const cartReducer: Reducer<CartState,CartAction> = (state = initialState, action): CartState => {
  switch (action.type) {
    case CartActionTypes.OPEN_CART:
     return {...state, isOpen: true}
    case CartActionTypes.CLOSE_CART:
     return {...state, isOpen: false}
    default:
      return state
  }
}
