import { createSlice } from "@reduxjs/toolkit";

const tripsSlice = createSlice({
	initialState: {
		history: [],
		current: { active: false, coords: [], distance: 0, type: null },
		types: [
			{ name: "Bike", image: "bike.svg" },
			{ name: "Scooter", image: "scooter.svg" },
			{ name: "Public Transport", image: "public_transport.svg" },
			{ name: "Walking", image: "walking.svg" },
			{ name: "Car", image: "car.svg" },
		],
	},
	name: "trips",
	reducer: {},
});

export default tripsSlice.reducer;
