import React from "react";
import WheelComponent from "react-wheel-of-prizes";
function Wheel() {
  const segments = [
    "30% SITEWIDE OFF",
    "BUY 1 GET 1 FREE",
    "FREE COFFEE MUG ON PURCHASE WORTH  1000",
    " Buy 2 Effervescen tablets &  get  1 free",
    "Free 50g tea on purchase of Rs. 500",
    "HOT CHOCLATE FREE WITH TEA",
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={250}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default Wheel;
