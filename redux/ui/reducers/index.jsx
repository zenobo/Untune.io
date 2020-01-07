import produce from 'immer'
import { TOGGLE_SIDEBAR } from '../actions/index'
import { INITIAL_STATE } from '../types/initialState'

export const ui = (state = INITIAL_STATE, action) => {
  const actionType =action.type
  const payload = action.payload

  switch (actionType) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        sidebarEnabled: !state.sidebarEnabled,
      }
    }
    default:
      return state
  }
}
