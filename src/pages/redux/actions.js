import actionTypes from './actionTypes'

export const toggleFavorite = (productId) => {
  return {
    type: actionTypes.TOGGLE_FAVOURITE,
    payload: productId,
  }
}
