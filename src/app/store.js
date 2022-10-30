import {configureStore} from "@reduxjs/toolkit";
import mapReducer, { persistMapState } from "../features/mapSlice";
import tripsReducer, { persistTripsState } from "../features/tripsSlice";
import userReducer, { persistUserState } from "../features/userSlice";

const store = configureStore({
    reducer: {
        trips: tripsReducer,
        map: mapReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			// add middleware
			persistTripsState,
            persistMapState,
            persistUserState,
		]),
});

export default store;