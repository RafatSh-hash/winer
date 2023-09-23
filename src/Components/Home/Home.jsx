/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner/Banner";
import Welcome from "./Welcome/Welcome";
import Signature from "./Signature/Signature";
import Selector from "./Selector/Selector";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <Signature></Signature>
      <Selector></Selector>
    </div>
  );
};

export default Home;
