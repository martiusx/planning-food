import "./scss/index.scss";
import Home from "./pages/Home";
import AppHome from "./pages/AppHome";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppHome />} />
      </Routes>
    </div>
  );
}

export default App;
