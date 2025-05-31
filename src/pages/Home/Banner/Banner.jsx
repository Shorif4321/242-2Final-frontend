import React from "react";
import banner from "../../../assets/banner.png";
import MainButton from "../../../components/MainButton/MainButton";

const Banner = () => {
  return (
    <div style={{backgroundImage:`url(${banner})`}} className="flex px-4 md:px-10 py-10 md:py-20 bg-center bg-cover">
      <div className="md:w-1/2 space-y-10 text-white">
        <h1 className="text-2xl md:text-6xl font-semibold md:leading-25">
          Rediscover Youth, <span className="text-primary">Redefine Life.</span>
        </h1>
        <p>
          Embrace a renewed sense of vitality and confidence with advanced
          anti-aging therapies. At Relive, we help you unlock the best version
          of yourself—inside and out.
        </p>
  
        <MainButton>Contact us</MainButton>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Banner;
