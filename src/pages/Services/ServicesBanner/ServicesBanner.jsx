import React, { useState } from "react";
import banner from "../../../assets/banner.png";
import { DayPicker } from "react-day-picker";
//

const ServicesBanner = ({selectedDate,setSelectedDate}) => {



  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="md:flex px-4 md:px-10 py-10 md:py-20 bg-center bg-cover"
    >
      <div className="md:w-1/2 space-y-10 text-white">
        <h1 className="text-2xl md:text-6xl font-semibold md:leading-25">
          Select your <span className="text-primary">Date</span>
        </h1>
        <p>
          Vitality and confidence with advanced anti-aging therapies. At Relive,
          we help you unlock the best version of yourself—inside and out.
        </p>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="bg-white rounded py-4 px-7">
          <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          
        />
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
