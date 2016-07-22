import { handleAction, combineActions } from 'redux-actions'
import { increment, decrement } from './actions'
export default handleAction(combineActions(increment, decrement), {
  next: (state, { payload: { amount } }) => ({ ...state, count: state.count + amount }),
  throw: state => ({ ...state, counter: 0 }),
}, { count: 0 })
