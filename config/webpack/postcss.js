/**
 * @warning: the ordering is important
 */
const sharedPlugins = webpack => ([
  require('postcss-import')({
    addDependencyTo: webpack,
    path: ['node_modules', 'src/app'],
    plugins: [
      // require('stylelint')({
      //   extends: 'stylelint-config-standard',
      //   rules: []
      // })
    ]
  }),
  require('postcss-url')(),
  require('postcss-cssnext')(),
  require('postcss-font-magician')(),
  require('postcss-discard-duplicates')(),
  require('postcss-autoreset')(),
  require('postcss-utilities')(),
  require('lost')(),
])
export default webpack => {
  return {
    development: [
      ...sharedPlugins(webpack),
      // require('postcss-devtools')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')({clearMessages: true})
    ],
    production: [
      ...sharedPlugins(webpack)
    ]
  }
}
