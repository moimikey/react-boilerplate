import { combineReducers } from 'redux'
import { reducer as mq$ } from 'redux-mediaquery'
import { reducers as Counter } from 'modules/Counter'
export default combineReducers({
  mq$,
  Counter
})
