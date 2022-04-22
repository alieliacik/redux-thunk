import { all } from 'redux-saga/effects'

import productDetailSaga from '../pages/ProductDetail/redux/sagas'
import productsSaga from '../pages/Products/redux/sagas'

function* rootSaga() {
  yield all([productDetailSaga(), productsSaga()])
}

export default rootSaga
