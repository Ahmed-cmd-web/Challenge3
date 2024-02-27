/** @format */

import React from "react";
import Lottie from "react-lottie-player";
import loading from "../assets/loading.json";
const AppLoading = () => {
  return (
    <div className="flex  inset-0 absolute justify-center opacity-70 items-center z-50 bg-slate-100 ">
      <Lottie loop animationData={loading} play />
    </div>
  );
};

export default AppLoading;
