import {Reducer} from 'redux'
import {ProductsAction, ProductsActionTypes, ProductsState} from './types'
import Client from 'shopify-buy'

const initialState: ProductsState = {
  isLoading: false,
  products: [] as Client.Product[]
}

export const productsReducer: Reducer<ProductsState,ProductsAction> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return {...state, isLoading: true}
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {...state, isLoading: false}
    case ProductsActionTypes.FETCH_PRODUCTS_FAILURE:
      return {...state, isLoading: false}
    case ProductsActionTypes.ADD_PRODUCT:
    case ProductsActionTypes.REMOVE_PRODUCT:
    default:
      return state

  }
}
