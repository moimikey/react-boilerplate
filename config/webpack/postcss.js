/**
 * @warning: the ordering is important
 */
import { default as colors } from '../../src/app/utils/colors'
export default webpack => {
  return {
    development: [
      require('postcss-functions')({
        functions: colors
      }),
      require('postcss-import')({
        addDependencyTo: webpack,
        path: ['src/app'],
        // plugins: [
        //   require('stylelint')({
        //     extends: 'stylelint-config-standard',
        //     rules: []
        //   })
        // ]
      }),
      // require('postcss-devtools')(),
      // require('postcss-utilities')(),
      require('postcss-cssnext')(),
      require('postcss-url')(),
      require('postcss-autoreset')(),
      require('postcss-font-magician')(),
      require('postcss-reporter')({clearMessages: true}),
      require('postcss-browser-reporter')(),
    ],
    production: [
      require('postcss-functions')({
        functions: colors
      }),
      require('postcss-import')({
        addDependencyTo: webpack,
        path: ['node_modules', 'src']
      }),
      require('postcss-cssnext')(),
      require('postcss-url')(),
      require('postcss-discard-duplicates')(),
      require('postcss-autoreset')(),
      require('postcss-font-magician')()
    ],
    test: [
      require('postcss-functions')({
        functions: colors
      }),
      require('postcss-import')({
        addDependencyTo: webpack,
        path: ['src']
      }),
      require('postcss-utilities')(),
      require('postcss-cssnext')({browsers: 'last 2 versions'}),
      require('postcss-url')(),
      require('postcss-discard-duplicates')(),
      require('postcss-autoreset')(),
      require('postcss-font-magician')()
    ],
  }
}
