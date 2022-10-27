import React, { useState } from 'react'
import { StyledActionsContainer } from './Actions.styled'
import RideOptions from './RideOptions'
import ToggleRide from './ToggleRide'

export default function Actions() {
  const [actionsOpen, setActionsOpen] = useState(false);

  function toggleActionsOpen() {
    setActionsOpen(prevState => !prevState);
  }

  return (
    <StyledActionsContainer open={actionsOpen} >
        <span id="swipe-bar"></span>
        <ToggleRide handleClick={toggleActionsOpen} visible={!actionsOpen}/>
        <RideOptions visible={actionsOpen}/>
    </StyledActionsContainer>
  )
}
