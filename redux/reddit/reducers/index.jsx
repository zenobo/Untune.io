import produce from 'immer'
import { SET_ENTRIES, SET_SUBREDDIT, SET_LOADING_ERROR } from '../actions/index'
import { INITIAL_STATE } from '../types/initialState'

export const reddit = (state = INITIAL_STATE, action) => {
  const actionType =action.type
  const payload = action.payload

  switch (actionType) {
    case SET_ENTRIES: {
      return {
        ...state,
        entries: payload.entries,
        youtubeUrl: payload.youtubeUrl,
        loadingError: false
      }
    }
    case SET_SUBREDDIT: {
      return {
        ...state,
        subreddit: payload.subreddit,
        isDefault: payload.isDefault
      }
    }
    case SET_LOADING_ERROR: {
      return {
        ...state,
        loadingError: true
      }
    }
    default:
      return state
  }
}
