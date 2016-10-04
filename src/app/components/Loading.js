import React from 'react'
import Loader from 'halogen/BeatLoader'
import * as colors from 'utils/colors'
export default function Loading() {
  return (
    <Loader color={colors.popColor} size="12px" margin="4px"/>
  )
}
