/** @format */

import React from "react";
import { Chip, ButtonGroup, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const AppCard = ({
  title = "Jane Cooper",
  desc = "Paragidm Representative",
  img,
}) => {
  return (
    <div className="w-72   flex flex-col  hover:scale-110 hover:skew-x-3 drop-shadow-md hover:drop-shadow-2xl  ease-linear duration-100 cursor-pointer  items-center rounded-lg border-2 border-transparent bg-white justify-center">
      <div className="w-full h-80 p-5 border-b flex flex-col items-center justify-around">
        <img src={img} className="rounded-full  w-28 h-28 m-5" alt={img} />
        <span className="text-lg">{title}</span>
        <span className="text-md text-gray-300">{desc}</span>
        <Chip label="Admin" color="success" size="small" />
      </div>

        <ButtonGroup size="large" color="inherit" fullWidth variant="text">
          <Button startIcon={<EmailIcon />}>Email</Button>
          <Button startIcon={<PhoneIcon />}>Phone</Button>
        </ButtonGroup>

    </div>
  );
};

export default AppCard;
