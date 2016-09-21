import { createActions } from 'redux-actions'
export const { increment, decrement } = createActions({
  INCREMENT: amount => ({ amount }),
  DECREMENT: amount => ({ amount: -amount }),
})

// export const { getMembers } = createAction('GET_MEMBERS', async ({ site, limit, offset }) => {
//   return await global.fetch(...)
// })
