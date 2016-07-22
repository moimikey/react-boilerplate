import { combineReducers } from 'redux'
import { reducers as Counter } from './modules/Counter'
export default combineReducers({ Counter })
