import React, { useEffect, useState } from "react";
import AppointmentsOptions from "./AppointmentsOptions";
import { format } from "date-fns";
import BookingModal from "./../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  console.log(treatment);

  const date = format(selectedDate, "PP");

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("appointments.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

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
        {appointments.map((appointment) => (
          <AppointmentsOptions
            key={appointment._id}
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
