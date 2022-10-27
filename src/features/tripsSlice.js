import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { distance } from "../utils/distance";

const STORAGE_KEY = "robit-app-trips";
const STORAGE = localStorage.getItem(STORAGE_KEY);

const INITIAL_STATE = STORAGE
	? JSON.parse(STORAGE)
	: {
		history: [],
		current: { id: null, active: false, coords: [], distance: 0, type: null },
		types: [
			{ name: "Bike", image: "bike.svg" },
			{ name: "Scooter", image: "scooter.svg" },
			{ name: "Public Transport", image: "public_transport.svg" },
			{ name: "Walking", image: "walking.svg" },
			{ name: "Car", image: "car.svg" },
		],
	};

export const tripsSlice = createSlice({
	name: "trips",
	initialState: INITIAL_STATE,
	reducers: {
		// only need to provide a type to start to start a trip
		startTrip: (state, action) => {
			if (state.current.active === true) return state;
			state.current.id = uuid();
			state.current.active = true;
			state.current.type = action.payload;
			return state;
		},
		endTrip: (state) => {
			if (state.current.active === false) return;
			const savedTrip = {
				id: state.current.id,
				coords: state.current.coords,
				distance: state.current.distance,
				type: state.current.type,
			};
			state.history.unshift(savedTrip);
			state.current = {
				id: null,
				active: false,
				coords: [],
				distance: 0,
				type: null,
			};
			return state;
		},
		// update current trip by providing lat,lng,distance and/or type
		updateCurrentTrip: (state, action) => {
			// calculate distance from (current position - last known position)
			if (state.current.coords.length > 0) {
				const lastKnownPosition = state.current.coords[state.current.coords.length - 1];
				state.current.distance =
				state.current.distance +
				distance(lastKnownPosition[0], lastKnownPosition[1], action.payload.lat, action.payload.lng);
			} 
			state.current.coords.push([action.payload.lat, action.payload.lng]);

			if (action.payload.type) {
				state.current.type = action.payload.type;
			}
			return state;
		},
	},
});


export const persistTripsState = (store) => (next) => (action) => {
	const result = next(action);
	if (action.type?.startsWith("trips")) {
		const tripsState = store.getState().trips;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tripsState));
	}
	return result;
};

export const { startTrip, endTrip, updateCurrentTrip } = tripsSlice.actions;

export default tripsSlice.reducer;
