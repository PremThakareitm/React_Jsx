import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/services/Services"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
