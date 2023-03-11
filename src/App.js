import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Listing } from "./Listing";

function App() {
  return (
    <div className="App">
      <h1>CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
