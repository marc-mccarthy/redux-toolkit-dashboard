import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

function Passengers() {
  const dispatch = useDispatch();
  const passengers = useSelector((store) => store.passengersReducer);

  const [newPassenger, setNewPassenger] = useState("");

  const addPassenger = () => {
    dispatch({ type: "ADD_PASSENGER", payload: newPassenger });
    setNewPassenger("");
  };

  return (
    <div>
      <h2>Passengers</h2>

      <input
        onChange={() => setNewPassenger(event.target.value)}
        value={newPassenger}
        type="text"
        name="name"
        placeholder="Enter Name"
      />
      <button onClick={addPassenger}>Add Passenger</button>

      <ul style={{ listStyleType: "none" }}>
        {passengers.map((passenger, i) => {
          return <li key={i}>{passenger}</li>;
        })}
      </ul>
    </div>
  );
}

export default Passengers;
