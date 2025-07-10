import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const navigate = useNavigate();

  const { name, slots } = treatment;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const phone = from.number.value;
    const slot = from.select.value;

    if (email == "") {
      return navigate("/login");
    }

    const booking = {
      appointmentDate: date,
      service: name,
      slot: slot,
      applicant: user?.displayName,
      email: user?.email,
      phone: phone,
    };

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your Booking is confirmed");
        }
      });

    setTreatment(null);
    from.reset();
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{name}</h3>
            <label
              htmlFor="booking-modal"
              className="btn rounded-full bg-primary text-white"
            >
              X
            </label>
          </div>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              defaultValue={date}
              readOnly
              className="input w-full mt-5"
              placeholder="Type here"
            />

            <select
              defaultValue="Select Your Time"
              className="select w-full mt-5"
              name="select"
            >
              <option disabled={true}>Select Your Time</option>
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="email"
              value={user?.email}
              readOnly
              className="input w-full mt-5"
              placeholder="Email"
            />

            <input
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
              className="input w-full mt-5"
              placeholder="Name"
            />

            <input
              type="text"
              name="number"
              value={user?.phoneNumber}
              className="input w-full mt-5"
              placeholder="Phone"
              required
            />
            <input
              type="submit"
              className="input w-full bg-primary text-white mt-5 cursor-pointer"
              value="Book Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
