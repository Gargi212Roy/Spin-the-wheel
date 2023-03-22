import React from "react";
import SpinnerWheel from "./SpinnerWheel";

import LogIn from "./LogIn";
import "./LandingPage.css";

function Flex() {
  return (
    <>
      <div className=" height bg-img1 bg-img2 bgcolor flex flex-row flex-nowrap justify-around items-center content-center mobile">
        <div>
          <SpinnerWheel />
        </div>
        <div>
          <LogIn />
        </div>
      </div>
    </>
  );
}

export default Flex;
