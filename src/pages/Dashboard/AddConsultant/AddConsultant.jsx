import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const AddConsultant = () => {
  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddService = (e) => {
    console.log("handleAddService");
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-1/2 shadow-lg p-5">
      <form onSubmit={handleAddService} className="fieldset ">
        <label className="label mt-2">Consultant Name</label>
        <input type="text" className="input w-full " placeholder="Name" />

        <label className="label mt-2">Specialty</label>
        <select
          defaultValue="Select Your Time"
          className="select w-full"
          name="select"
        >
          {specialties.map((specialty, i) => (
            <option value={specialty} key={i}>
              {specialty.name}
            </option>
          ))}
        </select>
        <label className="label mt-2">Files</label>
        <input
          type="file"
          className="file-input file-input-ghost border-1 border-secondary w-full"
          placeholder="Service Name"
        />

        <button type="submit" className="btn btn-primary mt-4">
          Add Now
        </button>
      </form>
    </div>
  );
};

export default AddConsultant;
