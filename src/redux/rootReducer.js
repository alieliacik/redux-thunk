import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from '../pages/Products/redux/reducer'
import productDetailsReducer from '../pages/ProductDetail/redux/reducer'

const productsPersistConfig = {
  key: 'products',
  storage: storage,
}

const rootReducer = combineReducers({
  products: persistReducer(productsPersistConfig, productsReducer),
  productDetails: productDetailsReducer,
})

export default rootReducer
