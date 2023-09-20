/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full">
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"signup"}>Sign Up</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navigation;
