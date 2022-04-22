import initialState from './store'
import actionTypes from './actionTypes'
import Immutable from 'seamless-immutable'

const productDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return Immutable({
        ...state,
      })
    case actionTypes.PRODUCT_DETAILS_RECEIVE:
      return Immutable({
        ...state,
        selectedProduct: payload,
        loading: false,
        error: null,
      })
    case actionTypes.PRODUCT_DETAILS_FAIL:
      return Immutable({
        ...state,
        error: payload,
      })
    case actionTypes.SET_LOADING_ACTION:
      return Immutable({
        ...state,
        loading: true,
      })
    default:
      return state
  }
}

export default productDetailsReducer
