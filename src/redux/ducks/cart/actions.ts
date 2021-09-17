import {CartActionTypes, CloseCart, OpenCart} from './types'

export const openCart = (): OpenCart => ({type: CartActionTypes.OPEN_CART})
export const closeCart = (): CloseCart => ({type: CartActionTypes.CLOSE_CART})
