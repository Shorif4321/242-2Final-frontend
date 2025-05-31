import React from "react";
import quote from '../../../assets/icons/quote.png'

const Review = ({ testimonial }) => {
  const { name, img, message, age } = testimonial;
  return (
    <div className="p-6 md:p-6 rounded-3xl bg-base-200 shadow-lg ">
      <div className="flex items-center">
        <img className="rounded-full w-14 h-14" src={img} alt="title" />
        <div className="ps-3">
          <h2 className="card-title font-bold">{name}</h2>
          <p>Age: {age}</p>
        </div>
      </div>

      <div className=" flex items-start  mt-4 p-0">
        <img className="h-4 w-7" src={quote} alt="quote" />
        <p className="text-gray-400 ms-2"> {message}</p>
      </div>
    </div>
  );
};

export default Review;
