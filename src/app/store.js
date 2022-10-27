import {configureStore} from "@reduxjs/toolkit";
import tripsReducer, { persistTripsState } from "../features/tripsSlice";

const store = configureStore({
    reducer: {
        trips: tripsReducer,
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			// add middleware
			persistTripsState,
		]),
});

export default store;