import actionTypes from './actionTypes'
import initialState from './store'

const productsReducer = (state = initialState, { type, payload }) => {
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

    case actionTypes.SET_LOADING_ACTION:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}

export default productsReducer
