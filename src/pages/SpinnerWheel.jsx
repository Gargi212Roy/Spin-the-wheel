import React from "react";
import "./SpinnerWheel.css";
import SpinnerImage from "../assets/png/spinner.png";

function SpinnerWheel() {
  return (
    <div className="spinnerMainDiv">
      <img className="image" src={SpinnerImage} alt="spinner image" />
    </div>
  );
}

export default SpinnerWheel;
