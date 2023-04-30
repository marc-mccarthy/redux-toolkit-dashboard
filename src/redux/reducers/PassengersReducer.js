const passengersReducer = (state = ["Marc"], action) => {
  // ...
  if (action.type === "ADD_PASSENGER") {
    return [...state, action.payload];
  }
  // Reducers always return state (existing value) by default
  return state;
};

export default passengersReducer;
