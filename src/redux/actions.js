import actionTypes from './actionTypes'
import axios from 'axios'

// export const setProducts = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: actionTypes.SET_LOADING_ACTION,
//     })
//     const { data } = await axios
//       .get('https://fakestoreapi.com/products')
//       .catch((error) => {
//         dispatch({
//           type: actionTypes.SET_PRODUCT_FAIL,
//           payload: error.message,
//         })
//       })

//     dispatch({
//       type: actionTypes.SET_PRODUCTS,
//       payload: data,
//     })
//   }
// }

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
  type: actionTypes.SET_PRODUCT_FAIL,
  payload: error,
})

export const selectedProduct = (productId) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_ACTION,
    })

    const { data } = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        dispatch({
          type: actionTypes.SET_PRODUCT_FAIL,
          payload: error.message,
        })
      })

    dispatch({
      type: actionTypes.SELECTED_PRODUCT,
      payload: data,
    })
  }
}
