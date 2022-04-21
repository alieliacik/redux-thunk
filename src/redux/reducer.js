import actionTypes from './actionTypes'
import initialState from './store'

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS_REQUEST:
      return {
        ...state,
      }
    case actionTypes.SET_PRODUCTS_RECEIVE:
      return {
        ...state,
        products: payload,
        loading: false,
        error: null,
      }
    case actionTypes.SET_PRODUCTS_FAIL:
      return {
        ...state,
        error: payload,
      }
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        error: null,
      }
    case actionTypes.PRODUCT_DETAILS_RECEIVE:
      return {
        ...state,
        loading: false,
        selectedProduct: payload,
      }
    case actionTypes.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: null,
      }
    case actionTypes.SET_LOADING_ACTION:
      return {
        ...state,
        loading: true,
        error: null,
      }

    default:
      return state
  }
}

export default productReducer
