/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import cocktail1 from "../../../assets/Image/cocktail1.png";
import cocktail2 from "../../../assets/Image/cocktail2.png";
import cocktail3 from "../../../assets/Image/cocktail3.png";
import cocktail4 from "../../../assets/Image/cocktail4.png";
import cocktail5 from "../../../assets/Image/cocktail5.png";

const Signature = () => {
  return (
    <div className="p-10 flex flex-row items-center justify-center">
      <div className="border-4 border-l-white border-b-transparent border-r-transparent border-t-transparent p-10 w-full md:w-[50%] lg:w-[50%]">
        <h1
          className="text-4xl text-white text-left"
          style={{ fontFamily: "Dancing Script" }}
        >
          Our Signature Cocktails
        </h1>
        <p className="text-white text-left text-sm">
          At Winer, we invite you to indulge in the art of mixology and elevate
          your cocktail experience. Our carefully crafted libations are more
          than just drinks; they are a celebration of flavors, a fusion of
          creativity, and a testament to the craftsmanship of our dedicated
          bartenders.
        </p>
      </div>
      <div className="w-full md:w-[50%] lg:w-[50%] ">
        <div
          class="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider="center: true, finite: false"
        >
          <ul
            class="uk-slider-items uk-grid uk-grid-match"
            uk-height-viewport="offset-top: true; offset-bottom: 10"
          >
            <li class="uk-width-3-5" style={{ fontFamily: "Dancing Script" }}>
              <div class="uk-cover-container">
                <img src={cocktail1} alt="" uk-cover />
                <div class="uk-position-bottom-center uk-panel">
                  <h1 className="text-3xl">A day in Bahamas</h1>
                </div>
              </div>
            </li>
            <li class="uk-width-3-5" style={{ fontFamily: "Dancing Script" }}>
              <div class="uk-cover-container">
                <img src={cocktail2} alt="" uk-cover />
                <div class="uk-position-bottom-center uk-panel">
                  <h1 className="text-3xl">Captain Cold</h1>
                </div>
              </div>
            </li>
            <li class="uk-width-3-5" style={{ fontFamily: "Dancing Script" }}>
              <div class="uk-cover-container">
                <img src={cocktail3} alt="" uk-cover />
                <div class="uk-position-bottom-center uk-panel">
                  <h1 className="text-3xl">Peincess of Kenya</h1>
                </div>
              </div>
            </li>
            <li class="uk-width-3-5" style={{ fontFamily: "Dancing Script" }}>
              <div class="uk-cover-container">
                <img src={cocktail4} alt="" uk-cover />
                <div class="uk-position-bottom-center uk-panel">
                  <h1 className="text-3xl">Burning Coin</h1>
                </div>
              </div>
            </li>
            <li class="uk-width-3-5" style={{ fontFamily: "Dancing Script" }}>
              <div class="uk-cover-container">
                <img src={cocktail5} alt="" uk-cover />
                <div class="uk-position-bottom-center uk-panel">
                  <h1 className="text-3xl">Devine Luxury</h1>
                </div>
              </div>
            </li>
          </ul>

          <a
            class="uk-position-center-left uk-position-small "
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          >
            A
          </a>
          <a
            class="uk-position-center-right uk-position-small "
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          >
            B
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signature;
