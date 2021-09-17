import Client from 'shopify-buy'

//State
export interface ProductsState {
  products: Client.Product[]
  isLoading: boolean
}

//Action types
export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',

  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

//Actions
export interface FetchProducts {
  type: ProductsActionTypes.FETCH_PRODUCTS
}

export interface FetchProductsSuccess {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: Client.Product[]
}

export interface FetchProductsFailure {
  type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE
  payload: { error: any }
}

export interface AddProduct {
  type: ProductsActionTypes.ADD_PRODUCT
  payload: { productId: string, quantity: number }
}

export interface RemoveProduct {
  type: ProductsActionTypes.REMOVE_PRODUCT
  payload: {productId: string}
}

//Action type
export type ProductsAction = FetchProducts | FetchProductsSuccess | FetchProductsFailure | AddProduct | RemoveProduct
