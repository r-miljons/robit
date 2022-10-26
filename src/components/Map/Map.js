import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { StyledMapContainer } from "./MapContainer.styled";
import mapboxgl from "!mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2llbmFvbmUiLCJhIjoiY2w5cHRpNmplMDJmYjNvbDdsY2ZxcWJobCJ9.IpoS9W6rp0EYf0XzYw-3ug';

export default function Map() {
	const [darkMode, setDarkmode] = useState(false);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(24.1);
	const [lat, setLat] = useState(56.94);
	const [zoom, setZoom] = useState(13);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
		container: mapContainer.current,
		style: "mapbox://styles/mapbox/light-v10",
		center: [lng, lat],
		zoom: zoom
		});
		map.current.addControl(
			new mapboxgl.GeolocateControl({
			positionOptions: {
			enableHighAccuracy: true
			},
			// When active, the map will receive updates to the device's location as it changes.
			trackUserLocation: true,
			// Draw an arrow next to the location dot to indicate which direction the device is heading.
			showUserHeading: true
			})
			);
		});

	return (
		<StyledMapContainer ref={mapContainer}>

		</StyledMapContainer>
	);
}
