import { createActions } from 'redux-actions'
export const INCREMENT = 'INCREMENT'
export const { increment } = createActions({
  [INCREMENT]: amount => ({ amount })
})
// console.log(createActions({
//   ACTION_1: () => {
//   },
//   ACTION_2: 'string'
// }))

// export const { getMembers } = createAction('GET_MEMBERS', async ({ site, limit, offset }) => {
//   return await global.fetch(...)
// })
