/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import cocktail1 from "../../../assets/Image/cocktail1.png";
import cocktail2 from "../../../assets/Image/cocktail2.png";
import cocktail3 from "../../../assets/Image/cocktail3.png";
import cocktail4 from "../../../assets/Image/cocktail4.png";
import cocktail5 from "../../../assets/Image/cocktail5.png";
import right from "../../../assets/Icons/arrowRight.png";
import left from "../../../assets/Icons/arrowLeft.png";

const Signature = () => {
  return (
    <div className="p-10 h-96 flex flex-row items-center justify-center">
      <div className="border-8 border-l-white border-b-transparent border-r-transparent border-t-transparent p-10 w-full md:w-[60%] lg:w-[60%]">
        <h1
          className="text-5xl font-semibold text-white text-left"
          style={{ fontFamily: "Dancing Script" }}
        >
          Our Signature Cocktails
        </h1>
        <p className="text-white text-left text-sm my-3">
          At Winer, we invite you to indulge in the art of mixology and elevate
          your cocktail experience. Our carefully crafted libations are more
          than just drinks; they are a celebration of flavors, a fusion of
          creativity, and a testament to the craftsmanship of our dedicated
          bartenders.
        </p>
      </div>
      <div className="w-full md:w-[40%] lg:w-[40%] ">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider="clsActivated: uk-transition-active; center: true; autoplay: true; autoplay-interval: 
          3000"
        >
          <ul className="uk-slider-items uk-grid">
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={cocktail1} width="1800" height="1200" alt="" />
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3
                    className="uk-margin-remove text-4xl font-semibold"
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    A Day in Bahamas
                  </h3>
                </div>
              </div>
            </li>
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={cocktail2} width="1800" height="1200" alt="" />
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3
                    className="uk-margin-remove text-4xl font-semibold"
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Princess of Kenya
                  </h3>
                </div>
              </div>
            </li>
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={cocktail3} width="1800" height="1200" alt="" />
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3
                    className="uk-margin-remove text-4xl font-semibold"
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Lemoncelli
                  </h3>
                </div>
              </div>
            </li>
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={cocktail4} width="1800" height="1200" alt="" />
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3
                    className="uk-margin-remove text-4xl font-semibold"
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Captain cold
                  </h3>
                </div>
              </div>
            </li>
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={cocktail5} width="1800" height="1200" alt="" />
                <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3
                    className="uk-margin-remove text-4xl font-semibold"
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Dragon Breath
                  </h3>
                </div>
              </div>
            </li>
          </ul>

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          >
            <img src={left} className="w-8 h-8" alt="" />
          </a>
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          >
            <img src={right} className="w-8 h-8" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signature;
