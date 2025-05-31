import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/arrow.png";

const Treatment = ({treatment}) => {
    const { name, img, description } = treatment
  return (
    <div>
      <div className=" p-4 rounded-2xl bg-base-200 shadow-lg ">
          <img
            className=""
            src={img}
            alt="title"
          />
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="">{description}</p>
          <Link to="/" className="text-primary text-xl underline font-bold flex items-end" >Learn More <img className="ms-2" src={arrow} alt="" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
