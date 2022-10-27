import React from "react";
import { useSelector } from "react-redux";
import { StyledRideOptionsContainer } from "./RideOptionsContainer.styled";
import { StyledTripType } from "./TripType.styled";

export default function RideOptions({visible, handleTripStart}) {
	const options = useSelector((state) => state.trips.types);

	return (
        visible ? 
		<StyledRideOptionsContainer>
            <h2>Choose your transportation</h2>
			{options.map((option) => {
				return (
					<StyledTripType key={option.name} onClick={() => handleTripStart(option.name)}>
						<img src={require(`../../assets/${option.image}`)} alt={option.name} />
						<p>{option.name}</p>
					</StyledTripType>
				);
			})}
		</StyledRideOptionsContainer>
        : <></>
	);
}
