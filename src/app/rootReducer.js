import { combineReducers } from 'redux'
import { reducer as mq$ } from 'redux-mediaquery'
import { reducers as Counter } from 'app/modules/Counter'
export const reducers = {
  mq$,
  Counter
}
export default combineReducers(reducers)
