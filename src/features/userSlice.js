import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "robit-app-users";
const STORAGE = localStorage.getItem(STORAGE_KEY);

const INITIAL_STATE = STORAGE
	? JSON.parse(STORAGE)
	: {
			info: {
				displayName: "Robitarian",
				defaultType: null,
				tripFrequency: null,
			},
			introCompleted: false,
	  };

export const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {
		updateDisplayName: (state, action) => {
			state.info.displayName = action.payload;
			return state;
		},
		updateDefaultType: (state, action) => {
			state.info.defaultType = action.payload;
			return state;
		},
		updateTripFrequency: (state, action) => {
			state.info.tripFrequency = action.payload;
			return state;
		},
        toggleIntroCompleted: (state) => {
            state.introCompleted = !state.introCompleted;
            return state;
        },
	},
});

export const persistUserState = (store) => (next) => (action) => {
	const result = next(action);
	if (action.type?.startsWith("user")) {
		const userState = store.getState().user;
		console.log(userState);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
		console.log(STORAGE);
	}
	return result;
};

export const { updateDefaultType, updateDisplayName, updateTripFrequency, toggleIntroCompleted } =
	userSlice.actions;

export default userSlice.reducer;
