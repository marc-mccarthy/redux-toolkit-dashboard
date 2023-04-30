const speedControlReducer = (state = 0, action) => {
  // ...
  if (action.type === "SPEED_UP") {
    return state + action.payload;
  }
  if (action.type === "SPEED_DOWN") {
    return state - action.payload;
  }
  // Reducers always return state (existing value) by default
  return state;
};

export default speedControlReducer;
