import { reducers, test } from 'app/utils/test/setup'
test('counter reducer', t => {
  const state = reducers({
    counter: { count: 19 }
  }, {
    type: 'INCREMENT',
    payload: { amount: 1 }
  })
  t.equal(state.counter.count, 20, 'INCREMENT')
  t.end()
})
