import React from "react";
import MainButton from "../../../components/MainButton/MainButton";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, description,img } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm border-1 border-primary rounded-xl">
        <figure>
          <img className="p-2 h-40 md:h-64 w-full border-1 border-primary rounded-xl"
            src={img}
            alt="title"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="mb-5">
          {description}
          </p>
        <MainButton > <Link to="/visa">Pic a Date</Link> </MainButton>
        </div>
      </div>
    </div>
  );
};

export default Service;
