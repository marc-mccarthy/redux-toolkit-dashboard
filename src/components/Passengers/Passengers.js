import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Passengers() {
  const dispatch = useDispatch();
  // useSelector to pull in the reducer state for 'value' property in passengers state object
  const passengers = useSelector((state) => state.passengers.value);

  const [newPassenger, setNewPassenger] = useState("");

  const addPassenger = () => {
    // the type is a string using 'slice name/reducer name' to find correct destination
    dispatch({
      type: "passengers/addPassenger",
      payload: newPassenger,
      index: 1,
    });
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
