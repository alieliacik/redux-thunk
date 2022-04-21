import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import actionTypes from './actionTypes'
import * as actions from './actions'

// will be replacedadd ...
const fetchProducts = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products')
    return { data: res.data, error: null }
  } catch (error) {
    return { data: null, error: error.message }
  }
}

function* getProductSaga() {
  yield put(actions.setLoadingAction())
  const products = yield call(fetchProducts)

  if (products.data) {
    yield put(actions.setProductsReceive(products.data))
  } else {
    yield put(actions.setProductsFail(products.error))
  }
}

function* mySaga() {
  yield takeLatest(actionTypes.SET_PRODUCTS_REQUEST, getProductSaga)
}

export default mySaga
