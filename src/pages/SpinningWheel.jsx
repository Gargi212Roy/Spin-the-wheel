import React, { useState } from "react";

import "./SpinningWheel.css";
import { useNavigate } from "react-router-dom";

function SpinningWheel() {
  const navigate = useNavigate();
  const [rotate, setRotate] = useState(false);
  const handleSpin = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
      console.log("Spinning...");
      navigate("/finalpage");
    }, 3000);
  };
  return (
    <div className="height bg-img1 bg-img2 bgcolor flex flex-col  justify-center items-center content-center spin-body">
      <div className="pointer"></div>
      <div className=" ">
        <ul className={rotate ? "movingSpinner" : "spinnerr"}>
          <li className="spBorder">
            <div className="text " id="six">
              <p>30%</p>
              <p>SITEWIDE</p>
              <p> OFF</p>
            </div>
          </li>
          <li>
            <div className="text " id="five">
              <p>BUY 1</p>
              <p>GET 1</p>
              <p>FREE</p>
            </div>
          </li>
          <li className="spBorder">
            <div className="text " id="four">
              <p>FREE COFFEE MUG </p>
              <p>ON PURCHASE</p>
              <p>WORTH</p>
              <p>1000+</p>{" "}
            </div>
          </li>
          <li>
            <div className="text" id="three">
              <p>Buy 2 Effervescent</p>
              <p>tablets &</p>
              <p>get 1</p>
              <p>free</p>
            </div>
          </li>
          <li className="spBorder">
            <div className="text " id="two">
              <p>Free 50g tea</p>
              <p>on purchase</p>
              <p>of</p>
              <p>Rs. 500</p>
            </div>
          </li>
          <li>
            <div className="text" id="one">
              <p>HOT CHOCOLATE</p>
              <p>FREE </p>
              <p>WITH TEA</p>
            </div>
          </li>
        </ul>
      </div>

      <button
        className="mt-5 pt-1 pr-6 pl-6 pb-3 colorbg place-items-center text-slate-50 text-3xl font-semibold rounded-3xl w-48 spin-btn"
        onClick={handleSpin}
      >
        SPIN
      </button>
    </div>
  );
}

export default SpinningWheel;
