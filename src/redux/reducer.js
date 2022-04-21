import actionTypes from './actionTypes'
import initialState from './store'

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS_REQUEST:
      return {
        ...state,
        // products: payload,
        // loading: false,
        // error: null,
      }
    case actionTypes.SET_PRODUCTS_RECEIVE:
      return {
        ...state,
        products: payload,
        loading: false,
        error: null,
      }
    case actionTypes.SET_PRODUCTS_RECEIVE:
      return {
        ...state,
        products: payload,
        loading: false,
        error: null,
      }

    case actionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
        loading: false,
        error: null,
      }
    case actionTypes.SET_LOADING_ACTION:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.SET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default productReducer
