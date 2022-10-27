import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import store from '../../app/store';
import { endTrip, startTrip } from '../../features/tripsSlice';
import { StyledActionsContainer } from './Actions.styled'
import RideOptions from './RideOptions'
import Summary from './Summary';
import ToggleRide from './ToggleRide'

export default function Actions() {
  const [actionsOpen, setActionsOpen] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const dispatch = useDispatch();

  function toggleActionsOpen() {
      setActionsOpen(prevState => !prevState);
  }

  function handleTripStart(tripType) {
    setActionsOpen(false);
    dispatch(startTrip(tripType));
  }

  function handleTripEnd() {
    if (!store.getState().trips.current.coords.length) return;
    setSummaryOpen(true);
    dispatch(endTrip());
  }

  return (
    <StyledActionsContainer open={actionsOpen} >
        <span id="swipe-bar"></span>
        <ToggleRide toggleActionsOpen={toggleActionsOpen} visible={!actionsOpen} handleTripEnd={handleTripEnd}/>
        <RideOptions handleTripStart={handleTripStart} visible={actionsOpen}/>
        { summaryOpen && <Summary setSummaryOpen={setSummaryOpen}/> }
    </StyledActionsContainer>
  )
}
