import Immutable from 'seamless-immutable'

import actionTypes from './actionTypes'
import initialState from './store'

const sharedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.TOGGLE_FAVOURITE:
      let favs = [...state.favs]

      if (state.favs.includes(payload)) {
        favs = state.favs.filter((item) => item !== payload)
      } else {
        favs = [...state.favs, payload]
      }

      return {
        ...state,
        favs,
      }
    default:
      return state
  }
}

export default sharedReducer
