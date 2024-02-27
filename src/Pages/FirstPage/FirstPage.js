/** @format */

import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
const FirstPage = () => {
  return (
    <div className="h-auto overflow-x-scroll flex flex-col justify-evenly  overflow-scroll">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default FirstPage;
