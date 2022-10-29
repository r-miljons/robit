import {configureStore} from "@reduxjs/toolkit";
import mapReducer, { persistMapState } from "../features/mapSlice";
import tripsReducer, { persistTripsState } from "../features/tripsSlice";

const store = configureStore({
    reducer: {
        trips: tripsReducer,
        map: mapReducer,
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			// add middleware
			persistTripsState,
            persistMapState,
		]),
});

export default store;