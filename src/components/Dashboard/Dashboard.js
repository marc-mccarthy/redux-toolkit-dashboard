import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  // useSelector to pull in the reducer state for 'value' property in speed and passengers state objects
  const speed = useSelector((state) => state.speedControl.value);
  const passengers = useSelector((state) => state.passengers.value);

  return (
    <div>
      <h2>Dashboard</h2>

      <p>SPEED: {speed}</p>
      <p>PASSENGER COUNT: {passengers.length}</p>
    </div>
  );
}

export default Dashboard;
