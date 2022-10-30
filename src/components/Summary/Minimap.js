import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import polyline from "@mapbox/polyline";
import { StyledMiniMap } from "./Minimap.styled";
import SquareSpinner from "../SquareSpinner/SquareSpinner";
import { TOKEN } from "../Map/Map";

export default function Minimap() {
	const [routeMap, setRouteMap] = useState("");
    const trip = useSelector((state) => state.trips.history[0]);

	useEffect(() => {
		const lineStyle = "path-5+337034";
		const markerStyle = "pin-s+4a7048";
		let currentStyle;
		let encodedPolyline;
		let isMarker = false;
		// first turn the trip coordinates into an encoded url string
		// if distance is less than 2 m, display a marker instead of a line
		if (trip.distance < 2) {
			currentStyle = markerStyle;
			encodedPolyline = `${trip.coords[0][1]},${trip.coords[0][0]}`;
			isMarker = true;
		} else if (trip.distance >= 2) {
			currentStyle = lineStyle;
			encodedPolyline = encodeURIComponent(polyline.encode(trip.coords));
			isMarker = false;
		}
		// then build the url
		let url = `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/${currentStyle}(${encodedPolyline})/${
			isMarker ? `${encodedPolyline},14.5,0` : "auto"
		}/600x400@2x?${isMarker ? "" : "padding=70&"}access_token=${TOKEN}`;
		// and finally, fetch the mini map from geobox endpoint
		fetch(url)
			.then((response) => setRouteMap(response.url))
			.catch((e) => console.log(e));
	}, []);

	return (
		<StyledMiniMap>
			{routeMap.length === 0 ? (
				<SquareSpinner />
			) : (
				<img src={routeMap} alt="route map" />
			)}
		</StyledMiniMap>
	);
}
