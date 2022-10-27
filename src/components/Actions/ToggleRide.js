import React from 'react'
import { StyledToggleRideButton } from './ToggleRide.styled'

export default function ToggleRide({handleClick, visible}) {
  return (
    <StyledToggleRideButton visible={visible} onClick={handleClick}>Start Ride</StyledToggleRideButton>
  )
}
