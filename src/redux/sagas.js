import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import actionTypes from './actionTypes'
import * as actions from './actions'
import cts from '../crud/cts'

const fetchProducts = async () => cts('get', '/products')

function* getProductsSaga() {
  yield put(actions.setLoadingAction())
  const products = yield call(fetchProducts)

  if (products.data) {
    yield put(actions.setProductsReceive(products.data))
  } else {
    yield put(actions.setProductsFail(products.error))
  }
}

const fetchProductDetails = async (productId) =>
  cts('get', `/products/${productId}`)

function* getProductDetailsSaga({ payload }) {
  yield put(actions.setLoadingAction())
  const product = yield call(fetchProductDetails, payload)

  if (product.data) {
    yield put(actions.setProductDetailsReceive(product.data))
  } else {
    yield put(actions.setProductDetailsFail(product.error))
  }
}

function* mySaga() {
  yield takeLatest(actionTypes.SET_PRODUCTS_REQUEST, getProductsSaga)
  yield takeLatest(actionTypes.PRODUCT_DETAILS_REQUEST, getProductDetailsSaga)
}

export default mySaga
