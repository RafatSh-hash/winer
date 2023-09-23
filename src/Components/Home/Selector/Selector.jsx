/* eslint-disable no-unused-vars */
import React from "react";
import B1 from "../../../assets/Image/B1.jpg";
import { Link } from "react-router-dom";

const Selector = () => {
  return (
    <div className="my-10 md:my-14 lg:my-20 flex flex-col md:flex-row lg:flex-row">
      <div className="nonA_Container w-[50%] bg-black transition-all duration-1000 hover:text-4xl hover:w-[70%]">
        <Link>
          <div className="nonA_bgImg p-20 w-full h-full flex items-center justify-center text-center text-white text-3xl decoration-none ">
            Non-Alcoholic
          </div>
        </Link>
      </div>
      <div className="a_Container w-[50%] bg-black transition-all duration-1000 hover:w-[70%]">
        <Link>
          <div className="a_bgImg p-20 w-full h-full flex items-center justify-center text-center text-white text-3xl decoration-none transition-all duration-1000 hover:text-4xl">
            Alcoholic
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Selector;
