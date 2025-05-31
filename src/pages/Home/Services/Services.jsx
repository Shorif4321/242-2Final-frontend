import React from "react";
import Service from "./Service";
import visa from '../../../assets/visa.jpg'
import f1visa from '../../../assets/education.jpg'
import tourist from '../../../assets/tourist.jpeg'
import immigration from '../../../assets/immigrant.jpeg'

const Services = () => {

    
  const servicesData = [
    {
      _id: 1,
      name: "Visa Process",
      img: visa,
      description:
        "Collect your online visa established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "F1 Visa Details",
      img: f1visa,
      description:
        "F1 Visa It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Tourist Visa process",
      img: tourist,
      description:
        "Tourist It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 4,
      name: "Immigration",
      img: immigration,
      description:
        "Immigration is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 4,
      name: "Immigration",
      img: immigration,
      description:
        "Immigration is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 4,
      name: "Immigration",
      img: immigration,
      description:
        "Immigration is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];



  return (
    <div>
      <div className="text-center md:w-1/2 p-4 md:p-0 mx-auto mb-5">
        <h2 className="text-2xl md:text-4xl font-semibold  mt-4 md:mt-0">
          Meet <span className="text-primary ">Relive</span>{" "}
        </h2>
        <p>
          Optimize your results with expertly curated peptide combinations
          designed to enhance effectiveness and deliver maximum benefits.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-7 px-4 md:px-10 py-10">
        {
            servicesData.map(service=> <Service
            key={service._id}
            service={service}
            ></Service>)
        }
      </div>




    </div>
  );
};

export default Services;
