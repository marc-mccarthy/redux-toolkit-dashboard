import React from "react";
import { useDispatch, useSelector } from "react-redux";
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

function SpeedControl() {
  const dispatch = useDispatch();
  const speed = useSelector((store) => store.speedControlReducer);

  const increaseSpeed = () => {
    dispatch({ type: "SPEED_UP", payload: 1 });
  };

  const decreaseSpeed = () => {
    if (speed >= 1) {
      dispatch({ type: "SPEED_DOWN", payload: 1 });
    }
  };

  return (
    <div>
      <h2>Speed Control</h2>

      <button onClick={increaseSpeed}>Increase Speed</button>
      <p>SPEED: {speed}</p>
      <button onClick={decreaseSpeed}>Decrease Speed</button>
    </div>
  );
}

export default SpeedControl;
