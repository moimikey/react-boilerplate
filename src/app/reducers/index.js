import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as mq$ } from 'redux-mediaquery'
import reducers from '!babel!config/redux/reducers'
export const rootReducers = {
  mq$,
  ...reducers
}
export default combineReducers({
  ...rootReducers,
  routing: routerReducer
})
// import { handleActions } from 'redux-actions'
// import { increment } from '../actions/CounterActions'
//
// export default handleActions({
//   [increment]: (state, action) => ({
//     counter: state.counter + action.payload
//   })
// }, { counter: 0 })


// import { handleActions } from 'redux-actions'
//
// export default handleActions({
//   GET_PAGE: (page, { payload }) => payload,
//   GET_SUBNAV: (subnav, { payload }) => ({ ...subnav, subnav: payload }),
// }, null)
