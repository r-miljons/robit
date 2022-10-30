import React from "react";
import { millisToMin } from "../../utils/millisToMin";
import { StyledSummarySlider } from "./SummarySlider.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSliderCard } from "./SliderCard.styled";

export default function SummarySlider({ data }) {
	const summaryData = {
		distance: Math.round(data.distance),
		time: millisToMin(data.endTime - data.startTime),
		points: data.points,
	};
	const dataArray = Object.entries(summaryData);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	function getDataText(key) {
		switch (key) {
			case "distance":
				return "Meters Travelled";
			case "time":
				return "Time Elapsed";
			case "points":
				return "Rōbits Earned";
			default:
				return "Great stuff!";
		}
	}

	return (
		<StyledSummarySlider>
			<Slider {...settings}>
				{dataArray.map((item) => {
					return (
						<div style={{padding: 20}} key={item}>
							<StyledSliderCard key={item}>
								<div id="stat">{item[1]}</div>
								<p>{getDataText(item[0])}</p>
							</StyledSliderCard>
							;
						</div>
					);
				})}
			</Slider>
		</StyledSummarySlider>
	);
}
