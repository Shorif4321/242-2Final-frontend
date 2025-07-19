import React, { useEffect, useState } from "react";
import AppointmentsOptions from "./AppointmentsOptions";
import { format } from "date-fns";
import BookingModal from "./../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  console.log(treatment);
  const date = format(selectedDate, "PP");

  const {data:appointments=[],isLoading} = useQuery({
    queryKey:['appointmentsOptions'],
    queryFn: async ()=>{
     const res = await fetch("http://localhost:3000/appointmentsOptions");
     const data = await res.json();
     return data
    }
  })


  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="mt-10">
      <div className="text-center md:w-1/2 p-4 md:p-0 mx-auto mb-5">
        <h2 className="text-2xl md:text-4xl font-semibold  mt-4 md:mt-0">
          Get <span className="text-primary ">Appointment</span>
        </h2>
        <p className="text-primary font-semibold text-xl mt-5">
          Your Selected Date: {date}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-7 px-4 md:px-10 py-10">
        {appointments.map((appointment,i) => (
          <AppointmentsOptions
            key={i}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AppointmentsOptions>
        ))}
      </div>

      {treatment && <BookingModal 
      treatment={treatment}
      setTreatment={setTreatment}
       date={date}
       ></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
