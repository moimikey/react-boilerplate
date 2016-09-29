/**
 * @warning: the ordering is important
 */
export default webpack => {
  return {
    development: [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: ['node_modules', 'src'],
        plugins: [
          require('stylelint')({
            extends: 'stylelint-config-standard',
            rules: []
          })
        ]
      }),
      require('postcss-devtools')(),
      require('postcss-utilities')(),
      require('postcss-cssnext')({ browsers: 'last 2 versions' }),
      require('postcss-url')(),
      require('postcss-discard-duplicates')(),
      require('postcss-autoreset')(),
      require('postcss-font-magician')(),
      require('postcss-reporter')({ clearMessages: true }),
      require('postcss-browser-reporter')()
    ],
    production: [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: ['node_modules', 'src']
      }),
      require('postcss-utilities')(),
      require('postcss-cssnext')({ browsers: 'last 2 versions' }),
      require('postcss-url')(),
      require('postcss-discard-duplicates')(),
      require('postcss-autoreset')(),
      require('postcss-font-magician')()
    ]
  }
}
