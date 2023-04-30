// pull in the correct api for creating slices
import { createSlice } from "@reduxjs/toolkit";

// give it a starting state
const initialState = {
  value: ["Marc"],
};

// create a slice with a name, initial state, and nested reducers
const passengerSlice = createSlice({
  name: "passengers",
  initialState,
  reducers: {
    addPassenger: (state, action) => {
      let newPassengers = state.value;
      newPassengers.push(action.payload);
    },
  },
});

// action creators are generated for each case reducer function
export const { addPassenger } = passengerSlice.actions;

// export the slice reducer function
export default passengerSlice.reducer;
