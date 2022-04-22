import { combineReducers } from 'redux'

import productsReducer from '../pages/Products/redux/reducer'
import productDetailsReducer from '../pages/ProductDetail/redux/reducer'

const rootReducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
})

export default rootReducer
