import React from "react";
import { StyledIntroCard } from "./IntroCard.styled";
import { StyledNextButton } from "./NextSlide.styled";

export default function IntroCard({ handleNextSlide, content }) {
	return (
		<StyledIntroCard>
			{content}
			<StyledNextButton onClick={handleNextSlide}>Next</StyledNextButton>
		</StyledIntroCard>
	);
}
