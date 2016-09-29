import { createAction } from 'redux-actions'
import { mediaQueryTracker } from 'redux-mediaquery'
export function mountResponsive(store) {
  const large = '(min-width: 64.063em)'
  const medium = '(min-width: 40.063em)'
  const small = '(max-width: 40.063em)'
  const tracker = mediaQueryTracker({
    isMobile: small,
    isTablet: medium,
    isDesktop: large,
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
