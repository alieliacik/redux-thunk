import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from '../pages/Products/redux/reducer'
import productDetailsReducer from '../pages/ProductDetail/redux/reducer'
import sharedReducer from '../pages/redux/reducer'

const productsPersistConfig = {
  key: 'products',
  storage: storage,
}

const sharedPersistConfig = {
  key: 'shared',
  storage: storage,
}
const productDetailsPersistConfig = {
  key: 'productDetails',
  storage: storage,
}

const rootReducer = combineReducers({
  products: persistReducer(productsPersistConfig, productsReducer),
  shared: persistReducer(sharedPersistConfig, sharedReducer),
  productDetails: persistReducer(
    productDetailsPersistConfig,
    productDetailsReducer
  ),
})

export default rootReducer
