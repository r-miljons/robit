import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "robit-app-map";
const STORAGE = localStorage.getItem(STORAGE_KEY);

const INITIAL_STATE = STORAGE
	? JSON.parse(STORAGE)
	: { currentPosition: { lng: 0, lat: 0 } };

export const mapSlice = createSlice({
	name: "map",
	initialState: INITIAL_STATE,
	reducers: {
		currentPosition: (state, action) => {
			state.currentPosition.lng = action.payload.lng;
			state.currentPosition.lat = action.payload.lat;
		},
	},
});

export const persistMapState = (store) => (next) => (action) => {
	const result = next(action);
	if (action.type?.startsWith("map")) {
		const mapState = store.getState().map;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(mapState));
	}
	return result;
};

export const { currentPosition } = mapSlice.actions;

export default mapSlice.reducer;
