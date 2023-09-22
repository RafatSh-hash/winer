/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="w-full md:w-[30%] lg:w-[30%] bg-black bg-opacity-90 text-white">
        <div className="text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black">
          <Link>
            <button className="w-full py-10 font-bold transition-all duration-1000 hover:rotate-[360deg] h-full">
              Alcoholic
            </button>
          </Link>
        </div>
        <div className="text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black ">
          <Link>
            <button className="w-full py-10 font-bold transition-all duration-1000 hover:rotate-[360deg] h-full">
              Non-Alcoholic
            </button>
          </Link>
        </div>
        <div className="text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black">
          <Link>
            <button className="w-full py-10 font-bold transition-all duration-1000 hover:rotate-[360deg] h-full">
              Vodka
            </button>
          </Link>
        </div>
        <div className="text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black ">
          <Link>
            <button className="w-full py-10 font-bold transition-all duration-1000 hover:rotate-[360deg] h-full">
              Gin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
