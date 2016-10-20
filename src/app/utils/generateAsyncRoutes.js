import R from 'ramda'
import asyncComponent from 'app/utils/hocs/asyncComponent'
export default pages => {
  return R.mapObjIndexed((val, key) => {
    return asyncComponent(() => System.import(`app/pages/${key}`).then(module => module.default))
  }, pages)
}
