import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SpinningWheel from "./pages/SpinningWheel";

import FinalPage from "./pages/FinalPage";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="  ">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="spinner" element={<SpinningWheel />} />
            <Route path="finalpage" element={<FinalPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
// bg-emerald-100
export default App;
