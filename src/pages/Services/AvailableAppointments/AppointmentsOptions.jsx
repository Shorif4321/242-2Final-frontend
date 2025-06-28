import React from "react";
import MainButton from "../../../components/MainButton/MainButton";

const AppointmentsOptions = ({ appointment ,setTreatment}) => {
  const { name, slots } = appointment;
  return (
    <div>
      <div className=" p-4 rounded-2xl bg-base-200 shadow-lg ">
        <div className="card-body space-y-3">
          <h3 className="text-center font-semibold text-2xl">{name}</h3>
          <h3 className="text-center font-semibold text-xl">
            Available {slots.length} {slots.length > 1 ? "Slots" : "Slot"}
          </h3>
          <label
            htmlFor="booking-modal"
            className="btn btn-primary rounded-4xl px-4 md:px-6 py-5 md:py-7 font-semibold capitalize"
            onClick={()=>setTreatment(appointment)}
          >
            Pic A Date
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsOptions;
