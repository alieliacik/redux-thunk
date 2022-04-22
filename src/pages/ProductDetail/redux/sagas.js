import { call, put, takeLatest } from 'redux-saga/effects'
import actionTypes from './actionTypes'
import * as actions from './actions'
import { fetchProductDetails } from '../apis'

function* getProductDetailsSaga({ payload }) {
  yield put(actions.setLoadingAction())
  const product = yield call(fetchProductDetails, payload)

  if (product.data) {
    yield put(actions.setProductDetailsReceive(product.data))
  } else {
    yield put(actions.setProductDetailsFail(product.error))
  }
}

function* productDetailSaga() {
  yield takeLatest(actionTypes.PRODUCT_DETAILS_REQUEST, getProductDetailsSaga)
}

export default productDetailSaga
