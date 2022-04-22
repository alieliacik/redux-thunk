import actionTypes from './actionTypes'
import initialState from './store'
import Immutable from 'seamless-immutable'

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS_REQUEST:
      return Immutable({
        ...state,
      })
    case actionTypes.SET_PRODUCTS_RECEIVE:
      return Immutable({
        ...state,
        products: payload,
        loading: false,
        error: null,
      })
    case actionTypes.SET_PRODUCTS_FAIL:
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

export default productsReducer
