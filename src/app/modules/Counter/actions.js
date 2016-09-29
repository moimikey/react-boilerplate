import { createActions } from 'redux-actions'
export const { increment } = createActions({
  INCREMENT: amount => ({ amount })
})

// export const { increment, decrement } = createActions({
//   INCREMENT: [
//     amount => ({ amount }), // payload
//     amount => ({ amount })  // meta
//   ]
// })
// export const { getMembers } = createAction('GET_MEMBERS', async ({ site, limit, offset }) => {
//   return await global.fetch(...)
// })
