/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Canvas = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setSliderData(data.drinks[0]);
    }

    fetchData();
  }, []);

  return (
    <li>
      <img
        className="w-full h-full"
        src={sliderData.strDrinkThumb}
        alt=""
        // uk-cover
      />
      <div className="uk-position-bottom-right uk-position-small uk-text-center uk-light bg-black bg-opacity-60 px-20 py-14">
        <h2 className="uk-margin-remove font-semibold text-4xl">
          {sliderData.strDrink}
        </h2>
        <p className="uk-margin-remove text-xl font-bold">
          {sliderData.strAlcoholic}
        </p>
      </div>
    </li>
  );
};

export default Canvas;
