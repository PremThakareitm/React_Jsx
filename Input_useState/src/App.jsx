// Implement a text input field that uses useState to update a state (textInput) dynamically as the user types.
// Display the input value below the input field in real-time.

// App.jsx

import React from 'react';
import Input from './components/Input'

const App = () => {
  return (
    <>
      <h2>Input:</h2><Input/>
    </>
  );
};

export default App;

