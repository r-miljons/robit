import React, { useEffect } from "react";
import IntroCard from "./IntroCard";
import { StyledCardContainer } from "./IntroCardContainer.styled";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
	updateDefaultType,
	updateTripFrequency,
} from "../../features/userSlice";

export default function IntroCardContainer({
	userInfo,
	handleNextSlide,
	currentSlideIndex,
}) {
  console.log(Object.keys(userInfo))
	const dispatch = useDispatch();
	const tripTypes = useSelector((state) => state.trips.types);

	const tripFrequency = [
		{ name: "Every day" },
		{ name: "Every other day" },
		{ name: "Twice a week" },
		{ name: "Once every week" },
		{ name: "Once every other week" },
		{ name: "Once a month" },
		{ name: "Once every other month" },
		{ name: "A few times a year" },
		{ name: "Twice a year" },
		{ name: "Once a year" },
		{ name: "Once every other year" },
		{ name: "Once in a few years" },
		{ name: "Once every decade" },
		{ name: "Once every other decade" },
		{ name: "A few times a lifetime" },
		{ name: "Twice in a lifetime" },
		{ name: "Once in a lifetime" },
		{ name: "Never" },
	];
  useEffect(() => {
    dispatch(updateDefaultType(tripTypes[0].name));
    dispatch(updateTripFrequency(tripFrequency[0].name));
  }, []);

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			border: state.isSelected ? "2px solid #243E36" : "2px solid #243E36",
			backgroundColor: "#F1F7ED",
			borderRadius: "10px",
			height: "50px",
		}),
		singleValue: (provided, state) => ({
			...provided,
			fontWeight: 600,
			fontSize: 20,
		}),
		option: (provided, state) => ({
			...provided,
			fontWeight: 600,
			fontSize: 20,
		}),
	};

	function getCardContent(cardName) {

		const options = [];
		tripTypes.forEach((value) => {
			options.push({
				value: value.name,
				label: value.name,
			});
		});

		const options2 = [];
		tripFrequency.forEach((value) => {
			options2.push({
				value: value.name,
				label: value.name,
			});
		});

   

		switch (cardName) {
			case "displayName": {
				return (
					<>
						<h2>Hey, {userInfo[cardName]}</h2>
						<p>Let's get to know each other</p>
					</>
				);
			}
			case "defaultType": {
				return (
					<>
						<h2>How do you commute to your workplace?</h2>
						<Select
							styles={customStyles}
							options={options}
							defaultValue={options[0]}
							 onChange={(e) => dispatch(updateDefaultType(e.label))}
						/>
					</>
				);
			}
			case "tripFrequency": {
				return (
					<>
						<h2>How often do you commute?</h2>
						<Select
							styles={customStyles}
							options={options2}
							defaultValue={options2[0]}
							 onChange={(e) => dispatch(updateTripFrequency(e.label))}
						/>
					</>
				);
			}
		}
	}

	return (
		<StyledCardContainer currentSlideIndex={currentSlideIndex}>
			{Object.keys(userInfo).map((key) => {
				return (
					<IntroCard
						key={key}
						handleNextSlide={handleNextSlide}
						content={getCardContent(key)}
					/>
				);
			})}
		</StyledCardContainer>
	);
}
