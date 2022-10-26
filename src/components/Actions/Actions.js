import React from 'react'
import { StyledActionsContainer } from './Actions.styled'
import ToggleRide from './ToggleRide'

export default function Actions() {
  return (
    <StyledActionsContainer>
        <span id="swipe-bar"></span>
        <ToggleRide/>
    </StyledActionsContainer>
  )
}
