import actionTypes from './actionTypes'

export const setLoadingAction = () => ({
  type: actionTypes.SET_LOADING_ACTION,
})

export const setProductsRequest = () => ({
  type: actionTypes.SET_PRODUCTS_REQUEST,
})
export const setProductsReceive = (products) => ({
  type: actionTypes.SET_PRODUCTS_RECEIVE,
  payload: products,
})
export const setProductsFail = (error) => ({
  type: actionTypes.SET_PRODUCTS_FAIL,
  payload: error,
})

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
