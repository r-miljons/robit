import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { StyledMapContainer } from "./MapContainer.styled";
/* eslint import/no-webpack-loader-syntax: off */
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { distance } from "../../utils/distance";

mapboxgl.accessToken =
	"pk.eyJ1Ijoic2llbmFvbmUiLCJhIjoiY2w5cHRpNmplMDJmYjNvbDdsY2ZxcWJobCJ9.IpoS9W6rp0EYf0XzYw-3ug";

export default function Map() {
	const [darkMode, setDarkmode] = useState(false);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(24.1);
	const [lat, setLat] = useState(56.94);
	const [zoom, setZoom] = useState(13);
	const [debug, setDebug] = useState(null);
	const [totals, setTotals] = useState({
		distance: 0,
		updateCount: 0,
	});

	function handleLocationChange(e) {
		setTotals({
			distance: totals.distance + 1,
			updateCount: totals.updateCount + 1,
		});
		setDebug(
			<div id="return-data"
			style={{
				position: "fixed",
				top: 400,
				left: 0,
				right: 0,
				margin: "0 auto",
				height: "100%",
				backgroundColor: "rgba(0,0,0,0.4)",
				display: "block",
				color: "white",
				textAlign: "center",
			}}>
				<p>previous latitude: {lng}</p>
				<p>previous longitude: {lat}</p>
				<p>latitude: {e.coords.latitude}</p>
				<p>longitude: {e.coords.longitude}</p>
				<p>total km: {totals.distance}</p>
				<p>total m: {totals.distance*1000}</p>
				<p>update count: {totals.updateCount}</p>
			</div>
		);
		setLng(e.coords.longitude);
		setLat(e.coords.latitude);
	}

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/light-v10",
			center: [lng, lat],
			zoom: zoom,
		});
		const geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true,
			},
			// When active, the map will receive updates to the device's location as it changes.
			trackUserLocation: true,
			// Draw an arrow next to the location dot to indicate which direction the device is heading.
			showUserHeading: true,
			showAccuracyCircle: true,
		});
		map.current.addControl(geolocate);
		map.current.on('load', () => {
			geolocate.trigger();
			});
		geolocate.on("geolocate", (e) => handleLocationChange(e));

		return () => {
			geolocate.off("geolocate", (e) => handleLocationChange(e));
		};
	});

	return (
		<>
			<StyledMapContainer ref={mapContainer} />;
			{debug}
		</>
	);
}
