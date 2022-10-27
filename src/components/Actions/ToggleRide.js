import React from 'react'
import { useSelector } from 'react-redux'
import { StyledToggleRideButton } from './ToggleRide.styled'

export default function ToggleRide({toggleActionsOpen, handleTripEnd ,visible}) {
  const isTripActive = useSelector(state => state.trips.current.active);

  return (
    <StyledToggleRideButton visible={visible} active={isTripActive} onClick={isTripActive? handleTripEnd : toggleActionsOpen}>{isTripActive? "End Trip" : "Start Trip"}</StyledToggleRideButton>
  )
}
