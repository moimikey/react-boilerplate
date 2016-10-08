import { reducers, test } from 'app/utils/test/setup'
test('Counter reducer', t => {
  const state = reducers({
    Counter: { count: 19 }
  }, {
    type: 'INCREMENT',
    payload: { amount: 1 }
  })
  t.equal(state.Counter.count, 20, 'INCREMENT')
  t.end()
})
