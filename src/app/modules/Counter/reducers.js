import { handleAction, combineActions } from 'redux-actions'
import { increment } from './actions'
export default handleAction(combineActions(increment), {
  next: (state, { payload: { amount } }) => ({ ...state, count: state.count + amount }),
  throw: state => ({ ...state, count: 0 })
}, { count: 0 })
