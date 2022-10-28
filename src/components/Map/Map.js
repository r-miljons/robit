import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { StyledMapContainer } from "./MapContainer.styled";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, connect } from "react-redux";
import { updateCurrentTrip } from "../../features/tripsSlice";
import store from "../../app/store";
/* eslint import/no-webpack-loader-syntax: off */
import mapboxgl from "!mapbox-gl";

export const TOKEN = "pk.eyJ1Ijoic2llbmFvbmUiLCJhIjoiY2w5cHRpNmplMDJmYjNvbDdsY2ZxcWJobCJ9.IpoS9W6rp0EYf0XzYw-3ug";

mapboxgl.accessToken = TOKEN;

function Map({tripState, setLoading}) {
	const dispatch = useDispatch();
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(24.1);
	const [lat, setLat] = useState(56.94);

	// make sure to send initial coords when starting a trip
	// to prevent a trip without coords in case there where no loaction updates
	useEffect(() => {
		if (tripState) {
			// send two points because the summary mini map requires at least two points 
			// (it draws a line between them to visualize travelled path)
			dispatch(updateCurrentTrip({ lng: lng, lat: lat }));
			dispatch(updateCurrentTrip({ lng: lng, lat: lat }));
		}
	}, [tripState]);

	function handleLocationChange(e) {
		setLng(e.coords.longitude);
		setLat(e.coords.latitude);

		// if theres an ongoing trip, send location updates to store

		if (tripState) {
			dispatch(
				updateCurrentTrip({
					lng: e.coords.longitude,
					lat: e.coords.latitude,
				})
			);
		}
	}

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/light-v10",
			center: [lng, lat],
			zoom: 13,
		});
		// initialize geolocation functionality
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
		// add geolocation controls (move to current location)
		map.current.addControl(geolocate);
		//trigger the start of location tracking on map load
		map.current.on("load", () => {
			geolocate.trigger();
			setLoading(false);
		});
		// add geolocation change listener with a callback
		geolocate.on("geolocate", (e) => handleLocationChange(e));

		//cleanup listener
		return () => {
			geolocate.off("geolocate", (e) => handleLocationChange(e));
		};
	});

	return (
		<>
			<StyledMapContainer ref={mapContainer} />;
		</>
	);
}

function mapStateToProps(state) {
	return {
		tripState: state.trips.current.active,
	}
}


export default connect(mapStateToProps)(Map);