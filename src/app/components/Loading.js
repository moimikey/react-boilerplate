import React from 'react'
import Loader from 'halogen/BeatLoader'
import colors from 'app/utils/colors'
export default function Loading() {
  return (
    <Loader color={colors.popColor()} size="16px" margin="4px"/>
  )
}
