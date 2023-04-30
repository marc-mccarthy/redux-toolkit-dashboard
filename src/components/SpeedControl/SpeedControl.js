import React from "react";
import { useDispatch, useSelector } from "react-redux";
// pulling in action creators from redux slices for use
import {
  decrease,
  increase,
} from "../../redux/features/speedControl/speedControlSlice";

function SpeedControl() {
  const dispatch = useDispatch();
  // useSelector to pull in the reducer state for 'value' property in speedControl state object
  const speed = useSelector((state) => state.speedControl.value);

  const increaseSpeed = () => {
    dispatch(increase());
  };

  const decreaseSpeed = () => {
    if (speed >= 1) {
      dispatch(decrease());
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
