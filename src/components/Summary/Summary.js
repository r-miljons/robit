import React, { useEffect, useState } from "react";
import { StyledSummary } from "./Summary.styled";
import { useSelector } from "react-redux";

import { millisToMin } from "../../utils/millisToMin";
import Minimap from "./Minimap";
import { StyledSummaryWrapper } from "./SummaryWrapper.styled";
import { StyledNextButton } from "../Intro/NextSlide.styled";
import SummarySlider from "./SummarySlider";

export default function Summary({ setSummaryOpen }) {
	const trip = useSelector((state) => state.trips.history[0]);

	return (
		<StyledSummary>
			<StyledSummaryWrapper>
				<h2>Trip Summary</h2>
				<SummarySlider data={trip}/>
				<StyledNextButton onClick={() => setSummaryOpen(false)} large>COLLECT RŌBITS</StyledNextButton>
				<h2>Route</h2>
				<Minimap/>
				
			</StyledSummaryWrapper>
		</StyledSummary>
	);
}
