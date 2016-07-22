import { createActions } from 'redux-actions'

export const { increment, decrement } = createActions({
  INCREMENT: amount => ({ amount }),
  DECREMENT: amount => ({ amount: -amount }),
})

// const reducer = handleActions({
//   INCREMENT: (state, action) => ({
//     counter: state.counter + action.payload
//   }),
//
//   DECREMENT: (state, action) => ({
//     counter: state.counter - action.payload
//   })
// }, { counter: 0 })
