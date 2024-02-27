/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import scrollToElement from "scroll-to-element";
const Appbutton = ({
  title = "nothin",
  bg = null,
  rounded = false,
  txtcolor = "black",
  borderColor = "white",
  to = null,
  scrollTo = null,
}) => {
  const navigation = useNavigate();

  return (
    <div
      style={{
        borderRadius: rounded && 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
        borderColor,
        borderWidth: "1px",
        cursor: "pointer",
        margin: "0px 10px 0px 10px ",
      }}
      onClick={() =>
        scrollTo
          ? scrollToElement(document.getElementById(scrollTo), {
              offset: 0,
              ease: "outBounce",
              duration: 2500,
            })
          : navigation(to)
      }
    >
      <span
        style={{
          color: txtcolor,
          padding: "10px",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default Appbutton;
