// Create a toggle button component in React using the `useState` hook. 
// The button should switch between "ON" and "OFF" states and display the current state dynamically.
// Write the code for this component and explain how state management is handled.

import React, { useState } from "react";
import "./App.css";

function App() {
  const [On, setOn] = useState(false);

  const toggleState = () => {
    setOn(!On);
  };

  let buttonClass = "button";
  if (On) {
    buttonClass = "buttonON";
  } else {
    buttonClass = "buttonOFF";
  }

  return (
    <>
      <button className={buttonClass} onClick={toggleState}>
        {On === false && "OFF"}
        {On === true && "ON"}
      </button>
    </>
  );
}

export default App;
