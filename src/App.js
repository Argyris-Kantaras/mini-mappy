import { Route, Routes } from "react-router";
import "./App.css";
import DisplayMap from "./components/DisplayMap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<DisplayMap />}></Route>
      </Routes>
    </div>
  );
}

export default App;
