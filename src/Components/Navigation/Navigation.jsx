/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Google from "../../assets/Icons/google.png";
import Facebook from "../../assets/Icons/facebook.png";
import search from "../../assets/Icons/search.png";
import login from "../../assets/Icons/login.png";
import userImg from "../../assets/Icons/user.png";

const Navigation = ({ user }) => {
  return (
    <div className="w-full bg-black bg-opacity-90 flex flex-row justify-between items-center">
      <div className="w-56 h-16">
        <img src={Logo} alt="" className="w-full h-full" />
      </div>

      <div className="flex flex-row">
        <div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              className="px-3 rounded-sm py-1 bg-black text-white border-black focus:bg-gray-700"
              placeholder="Search your drink"
            />
            <div className="w-8 h-8 p-2 rounded-r-md bg-black">
              <div className="button">
                <img src={search} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        {user ? (
          <>
            <div className="w-6 h-6 rounded-full mx-5  py-1">
              <button className="">
                <img src={userImg} alt="" className="w-full h-full" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-6 h-6 rounded-full mx-5  py-1">
              <button className="">
                <img src={Google} alt="" className="w-full h-full" />
              </button>
            </div>

            <div className="w-6 h-6 rounded-full mx-5  py-1">
              <button>
                <img src={Facebook} alt="" className="w-full h-full" />
              </button>
            </div>
            <div className="w-6 h-6 rounded-full mx-5  py-1">
              <button>
                <img src={login} alt="" className="w-full h-full" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Sign Up</Link>
        <Link to={"/login"}>Login</Link>
      </div> */}
    </div>
  );
};

export default Navigation;
