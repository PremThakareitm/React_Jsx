import { createContext, useState } from "react";
import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";

export const DataContext = createContext();

function App() {
  let [username, setUsername] = useState("abc");

  return (
    <div className="container">
      <DataContext.Provider value={username}>
        <Component1 />
        <Component2 />
      </DataContext.Provider>
    </div>
  );
}

export default App;
