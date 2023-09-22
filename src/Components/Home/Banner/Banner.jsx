/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";

const Banner = () => {
  return (
    <div className="flex flex-row">
      <div className="w-full md:w-[30%] lg:w-[30%] bg-black bg-opacity-90 text-white uk-animation-toggle">
        <div className=" text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black">
          <Link>
            <button className="uk-animation-slide-left-medium w-full py-10 font-bold  h-full  transition-all duration-300">
              Alcoholic
            </button>
          </Link>
        </div>
        <div className="text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black ">
          <Link>
            <button className="uk-animation-slide-right-medium w-full py-10 font-bold  h-full  transition-all duration-300">
              Non-Alcoholic
            </button>
          </Link>
        </div>
        <div className="text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black">
          <Link>
            <button className="uk-animation-slide-left-medium w-full py-10 font-bold ] h-full  transition-all duration-300">
              Vodka
            </button>
          </Link>
        </div>
        <div className="text-2xl text-center border-2 border-t-gray-600 border-b-black border-r-black border-l-black ">
          <Link>
            <button className="uk-animation-slide-right-medium w-full py-10 font-bold  h-full transition-all duration-300">
              Gin
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[70%] lg:w-[70%]">
        <div
          class="uk-position-relative uk-visible-toggle"
          tabindex="-1"
          uk-slideshow="animation: push; autoplay: true; autoplay-interval: 4000"
        >
          <ul class="uk-slideshow-items">
            <Canvas></Canvas>
            <Canvas></Canvas>
            <Canvas></Canvas>
          </ul>

          <div class="uk-light">
            <a
              class="uk-position-center-left uk-position-small "
              href="#"
              uk-slidenav-previous
              uk-slideshow-item="previous"
            >
              ⚫
            </a>
            <a
              class="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next
              uk-slideshow-item="next"
            >
              ⚫
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
