import {configureStore} from "@reduxjs/toolkit";
import tripsReducer from "../features/tripsSlice";

export const store = configureStore({
    reducer: {
        trips: tripsReducer,
    },
});