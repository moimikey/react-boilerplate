import { combineReducers } from 'redux'
import { reducer as Responsive } from 'redux-mediaquery'
import { reducers as Counter } from './modules/Counter'
export default combineReducers({
  Responsive,
  Counter
})
