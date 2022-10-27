import React, { useEffect, useState } from "react";
import { StyledSummary } from "./Summary.styled";
import polyline from "@mapbox/polyline";
import { TOKEN } from "../Map/Map";
import store from "../../app/store";

export default function Summary({setSummaryOpen}) {
	const [routeMap, setRouteMap] = useState("");

	useEffect(() => {
		// first turn the trip coordinates into an encoded url string
        console.log(store.getState().trips.history);
		const encodedPolyline = polyline.encode(store.getState().trips.history[0].coords);
		// then build the url
		let url = `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/path-5+337034(${encodeURIComponent(encodedPolyline)})/auto/400x400@2x?padding=50&access_token=${TOKEN}`;
		// and finally, fetch the mini map from geobox endpoint
		
		fetch(url)
			.then((response) => setRouteMap(response.url))
			.catch((e) => console.log(e));
	}, []);

	return (
		<StyledSummary>
			<h2>Your Summary</h2>
			<img style={{width: "100%", height: "300px", objectFit: "contain"}} src={routeMap} alt="route map" />
            <a onClick={() => setSummaryOpen(false)}>Close</a>
		</StyledSummary>
	);
}
