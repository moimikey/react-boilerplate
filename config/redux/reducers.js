function requireAll(requireContext) {
  return requireContext.keys().reduce((reducers, reducer) => ({
    ...reducers,
    [reducer.substr(2).split('/')[0].toLowerCase()]: requireContext(reducer).default
  }), {})
}

const reducers = requireAll(
  require.context(
    '../../src/app/modules',
    true, // recurse subdirectories
    /^\.\/.*\/reducers\.js$/
  )
)

export default {
  ...reducers
}
