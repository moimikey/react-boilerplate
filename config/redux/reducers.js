// function requireAll(requireContext) {
//   return requireContext.keys().map(requireContext)
// }

const getAllReducers = () => {
  const reducers = require.context('../../src/app/modules', true, /^\.\/.*\.js$/)
  return reducers.keys()
}

export default {
  getAllReducers
}