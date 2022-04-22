import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from './actionTypes'
import * as actions from './actions'
import { fetchProducts } from '../apis'

function* getProductsSaga() {
  yield put(actions.setLoadingAction())
  const products = yield call(fetchProducts)

  if (products.data) {
    yield put(actions.setProductsReceive(products.data))
  } else {
    yield put(actions.setProductsFail(products.error))
  }
}

function* productsSaga() {
  yield takeLatest(actionTypes.SET_PRODUCTS_REQUEST, getProductsSaga)
}

export default productsSaga
