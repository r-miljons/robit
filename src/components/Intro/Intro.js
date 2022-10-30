import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyledIntroContainer } from "./Intro.styled";
import IntroCardContainer from "./IntroCardContainer.js";
import SlideIndicator from "./SlideIndicator";

export default function Intro({setIntroOpen}) {
	const [currentSlideIndex, setcurrentSlideIndex] = useState(0);
    const userInfo = useSelector(state => state.user.info);
    console.log(userInfo);

    function handleNextSlide() {
        const lastSlideIndex = Object.keys(userInfo).length - 1;
        if (currentSlideIndex === lastSlideIndex) {
            setIntroOpen(false);
        } else {
            setcurrentSlideIndex(prevState => prevState + 1);
        };
        
    }

	return (
		<StyledIntroContainer>
			<IntroCardContainer currentSlideIndex={currentSlideIndex} handleNextSlide={handleNextSlide} userInfo={userInfo}/>
            <SlideIndicator userInfo={userInfo} currentSlideIndex={currentSlideIndex}/>
		</StyledIntroContainer>
	);
}
