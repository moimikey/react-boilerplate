import { mediaQueryTracker } from 'redux-mediaquery'
export function mountResponsive(store) {
  const large = '(min-width: 64em)'
  const medium = '(min-width: 40em)'
  const small = '(max-width: 39.9375em)'
  const tracker = mediaQueryTracker({
    isSmall: small,
    isMedium: medium,
    isLarge: large,
    innerWidth: true,
    innerHeight: true
  })
  const dispatch = store.dispatch.bind(store)
  tracker(dispatch)
  return store
}
