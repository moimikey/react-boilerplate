import React from 'react'
import R from 'ramda'
import { IndexRoute, Route } from 'react-router'
import asyncComponent from 'app/utils/hocs/asyncComponent'
import { camelToDash } from 'app/utils/strings'
export default pages => {
  const componentsToRoutes = components => {
    return R.map(componentName => {
      const Component = components[componentName]
      switch (componentName) {
        case 'Home':
          return <IndexRoute key={componentName} component={Component} />
        case 'FourOhFour':
          return <Route key={componentName} path="*" component={Component} />
        default:
          return <Route key={componentName} path={camelToDash(componentName)} component={Component} />
      }
    }, R.keys(components))
  }
  const components = R.mapObjIndexed((val, key) => {
    return asyncComponent(() => System.import(`app/pages/${key}`).then(module => module.default))
  }, pages)
  return componentsToRoutes(components)
}
