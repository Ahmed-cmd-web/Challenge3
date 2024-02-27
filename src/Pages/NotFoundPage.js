/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center  h-screen">
    <h1 className=" font-bold text-5xl">404 - Not Found!</h1>
    <Link to="/" className="text-blue-400 font-bold text-2xl hover:underline">
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;
