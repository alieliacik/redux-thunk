import initialState from './store'
import actionTypes from './actionTypes'

const productDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
      }
    case actionTypes.PRODUCT_DETAILS_RECEIVE:
      return {
        ...state,
        selectedProduct: payload,
        loading: false,
        error: null,
      }
    case actionTypes.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
      }
    case actionTypes.SET_LOADING_ACTION:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default productDetailsReducer
