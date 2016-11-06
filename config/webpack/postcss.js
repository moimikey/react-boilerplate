/**
 * @warning: the ordering is important
 */
const sharedPlugins = webpack => ([
  require('postcss-import')({
    addDependencyTo: webpack,
    path: ['node_modules', 'src/app']
    // plugins: []
  }),
  require('postcss-url')(),
  require('postcss-cssnext')(),
  require('postcss-font-magician')(),
  require('postcss-autoreset')(),
  require('postcss-discard-duplicates')(),
  require('lost')()
])
export default webpack => {
  return {
    development: [
      require('postcss-devtools')(),
      ...sharedPlugins(webpack),
      require('postcss-reporter')(),
      require('postcss-browser-reporter')()
    ],
    production: [
      ...sharedPlugins(webpack)
    ]
  }
}
