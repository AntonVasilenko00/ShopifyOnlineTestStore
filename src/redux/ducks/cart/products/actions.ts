import {
  AddProduct,
  FetchProducts,
  FetchProductsFailure,
  FetchProductsSuccess,
  ProductsActionTypes,
  RemoveProduct
} from './types'

export const fetchProducts = (): FetchProducts => ({type: ProductsActionTypes.FETCH_PRODUCTS})
export const fetchProductsSuccess = (): FetchProductsSuccess => ({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS})
export const fetchProductsFailure = (): FetchProductsFailure => ({type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE})

export const addProduct = (productId: string, quantity: number): AddProduct => ({type: ProductsActionTypes.ADD_PRODUCT, payload: {productId, quantity}})
export const removeProduct = (productId: string, quantity: number): RemoveProduct => ({type: ProductsActionTypes.REMOVE_PRODUCT, payload: {productId}})
