import { createActions } from 'redux-actions'
export const SET_STATE = 'SET_STATE'
export const { setState } = createActions({
  [SET_STATE]: state => ({ state })
})
