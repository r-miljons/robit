import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "robit-app-user";
const STORAGE = localStorage.getItem(STORAGE_KEY);

const INITIAL_STATE =  { displayName: "Robitarian", defaultType: null, tripFrequency: null };

export const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {
		updateDisplayName: (state, action) => {
            state.displayName = action.payload;
            return state;
        },
        updateDefaultType: (state, action) => {
            state.defaultType = action.payload;
            return state;
        },
        updateTripFrequency: (state, action) => {
            state.tripFrequency = action.payload;
            return state;
        },
	},
});

 export const persistUserState = (store) => (next) => (action) => {
 	const result = next(action);
 	if (action.type?.startsWith("user")) {
 		const userState = store.getState().user;
 		localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
 	}
 	return result;
 };

export const { updateDefaultType, updateDisplayName, updateTripFrequency } = userSlice.actions;

export default userSlice.reducer;