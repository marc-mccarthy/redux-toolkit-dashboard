import React from "react";
import { useSelector } from "react-redux";

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

function Dashboard() {
  const speed = useSelector((store) => store.speedControlReducer);
  const passengers = useSelector((store) => store.passengersReducer);

  return (
    <div>
      <h2>Dashboard</h2>

      <p>SPEED: {speed}</p>
      <p>PASSENGER COUNT: {passengers.length}</p>
    </div>
  );
}

export default Dashboard;
