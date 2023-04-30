// pull in the correct api for creating slices
import { createSlice } from "@reduxjs/toolkit";

// give it a starting state
const initialState = {
  value: 0,
};

// create a slice with a name, initial state, and nested reducers
export const speedControlSlice = createSlice({
  name: "speedControl",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

// action creators are generated for each case reducer function
export const { increase, decrease } = speedControlSlice.actions;

// export the slice reducer function
export default speedControlSlice.reducer;
