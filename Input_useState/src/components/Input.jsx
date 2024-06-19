import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter the text"
      />

      {input && <h3>Hi, {input}</h3>}
    </>
  );
}

export default Input;
