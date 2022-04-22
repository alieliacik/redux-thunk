import actionTypes from './actionTypes'

export const setProductDetailsRequest = (productId) => ({
  type: actionTypes.PRODUCT_DETAILS_REQUEST,
  payload: productId,
})
export const setProductDetailsReceive = (product) => ({
  type: actionTypes.PRODUCT_DETAILS_RECEIVE,
  payload: product,
})
export const setProductDetailsFail = (error) => ({
  type: actionTypes.PRODUCT_DETAILS_FAIL,
  payload: error,
})

export const setLoadingAction = () => ({
  type: actionTypes.SET_LOADING_ACTION,
})
