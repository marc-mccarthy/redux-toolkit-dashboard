// pull in the correct api for creating and configuring the store
import { configureStore } from "@reduxjs/toolkit";

// pull in slices that export reducers in different files
import passengersReducer from "./features/passengers/passengersSlice";
import speedControlReducer from "./features/speedControl/speedControlSlice";

// creation of the store
const store = configureStore({
  // root reducer holds all the reducers
  reducer: {
    passengers: passengersReducer,
    speedControl: speedControlReducer,
  },
});

export default store;
