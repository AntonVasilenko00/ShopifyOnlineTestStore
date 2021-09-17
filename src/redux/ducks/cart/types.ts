//Action Types
export enum CartActionTypes {
  OPEN_CART= 'OPEN_CART',
  CLOSE_CART= 'CLOSE_CART'
}

//State
export interface CartState {
  isOpen: boolean
}

//Actions
export interface OpenCart {
  type: CartActionTypes.OPEN_CART
}

export interface CloseCart {
  type: CartActionTypes.CLOSE_CART
}

export type CartAction = OpenCart | CloseCart
