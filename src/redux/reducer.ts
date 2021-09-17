import { combineReducers } from "redux";
import {cartReducer} from './ducks/cart/reducers'

export const rootReducer = combineReducers({cart: cartReducer})
