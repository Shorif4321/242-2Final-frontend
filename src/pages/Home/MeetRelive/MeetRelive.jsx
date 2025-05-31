import React from "react";
import meetRelive from "../../../assets/MeetRelive.png";
import MainButton from "../../../components/MainButton/MainButton";
const MeetRelive = () => {
  return (
    <div className="md:flex justify-between items-center gap-10 px-4 md:px-10 py-10 md:py-20">
      <div className="md:w-1/2">
        <img src={meetRelive} alt="" />
      </div>
      <div className="md:w-1/2 space-y-5 md:space-y-10">
        <h2 className="text-2xl md:text-4xl font-semibold  mt-4 md:mt-0">
          Meet <span className="text-primary ">Relive</span>
        </h2>
        <p className="text-secondary">
          Relive is a premium anti-aging clinic offering advanced, science-based
          therapies to support longevity and overall wellness. We blend
          cutting-edge medical technology with personalized care to help you
          feel your best—at any age.
        </p>
        <MainButton>Learn more</MainButton>
      </div>
    </div>
  );
};

export default MeetRelive;
