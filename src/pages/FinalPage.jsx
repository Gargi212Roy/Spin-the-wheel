import React, { useState } from "react";

import SpinnerWheel from "./SpinnerWheel";
import "./FinalPage.css";

function FinalPage() {
  const [isCopied, setIsCopied] = useState(false);
  const copyText = "XAXPDF20";
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText).then(() => {
      setTimeout(() => {
        setIsCopied(true);
      }, 500);
    });

    // .catch((err)=>{
    //   console.log(err)
    // })
  };

  return (
    <div className="height bg-img1 bg-img2 bgcolor flex flex-row flex-nowrap justify-around items-center content-center  responsive">
      <div>
        <SpinnerWheel />
      </div>
      <div className="widthFinal ">
        <h3 className="font-bold text-2xl responsive-h3">Congrats! You Won:</h3>
        <h1 className="font-bold text-5xl responsive-h1">@20% Off Coupon </h1>
        <h1 className="font-bold  leading-normal text-5xl responsive-h1">
          On Best Sellers
        </h1>
        <div className="flex flex-row justify-start pb-3 text-4xl">
          {/* <h1 className="p-2 pr-10 pl-4 text-slate-50  font-medium rounded-l-lg colorbgCoupon responsive-coupon">
            XAXPDF20
          </h1> */}
          <input
            className="p-2  pl-4 text-slate-50  font-medium rounded-l-lg colorbgCoupon responsive-coupon"
            type="text"
            value={copyText}
            readOnly
          />

          <button
            className="p-2 pr-6 pl-8 colorbg text-slate-50  font-medium rounded-r-lg responsive-copy"
            onClick={handleCopyClick}
          >
            <span>{isCopied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <button className=" pt-1 pr-6 pl-6 pb-3 colorbg place-items-center text-slate-50 text-3xl font-semibold rounded-3xl responsive-copy response">
          Close Panel & Copy
        </button>
        <p className="italic text-sm responsive-txt">
          You can claim your coupon for 10 minutes only!
        </p>
      </div>
    </div>
  );
}

export default FinalPage;
