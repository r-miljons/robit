import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import store from '../../app/store';
import { endTrip, startTrip } from '../../features/tripsSlice';
import { StyledActionsContainer } from './Actions.styled'
import RideOptions from './RideOptions'
import ToggleRide from './ToggleRide'

export default function Actions() {
  const [actionsOpen, setActionsOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleActionsOpen() {
    
    if (store.getState().trips.current.active) {
      dispatch(endTrip());
    } else {
      setActionsOpen(prevState => !prevState);
    }
  }

  function handleTripStart(tripType) {
    setActionsOpen(false);
    dispatch(startTrip(tripType));
  }

  return (
    <StyledActionsContainer open={actionsOpen} >
        <span id="swipe-bar"></span>
        <ToggleRide handleClick={toggleActionsOpen} visible={!actionsOpen}/>
        <RideOptions handleTripStart={handleTripStart} visible={actionsOpen}/>
    </StyledActionsContainer>
  )
}
