/** @format */

import React from "react";
import Appbutton from "../../components/Appbutton";
import buttonsdata from "../../content/buttonsdata";

const Section1 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="font-bold text-3xl ">
        <h2>Coligo Challenge</h2>
      </div>
      <div className="text-xl p-16">
        <span>hello this the challenge ,please bla bla blablaba abbakbxnsaxianasixusaiusainxisanioioji asbxiuasahsa iahxiaisx ixaniassxaj</span>
      </div>
      <div className="flex justify-center  w-full h-auto">
        {buttonsdata.map((e, i) => (
          <Appbutton {...e} key={i}  />
        ))}
      </div>
    </div>
  );
};

export default Section1;
