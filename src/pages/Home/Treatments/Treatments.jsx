import React from "react";
import pot from "../../../assets/icons/pot.png";
import hart from "../../../assets/icons/harts.png";
import sun from "../../../assets/icons/sun.png";
import Treatment from "./Treatment";

const Treatments = () => {
  const treatments = [
    {
      _id: 1,
      name: "Peptide Therapy",
      img: pot,
      description: "Boost cellular regeneration and vitality.",
    },
    {
      _id: 2,
      name: "Hormone Replacement",
      img: hart,
      description: "Restore balance, energy, and well-being.",
    },
    {
      _id: 3,
      name: "Skin Rejuvenation",
      img: sun,
      description: "Advanced treatments for youthful skin.",
    },
  ];

  return (
    <div className="px-4 md:px-10 py-10 md:py-20">
      <div className="text-center  p-4 md:p-0 mx-auto mb-6">
        <h2 className="text-2xl md:text-4xl font-semibold  mt-4 md:mt-0">
          Our Specialized <span className="text-primary ">Treatments</span>
        </h2>
        <p className="mt-5">
          Explore our wide range of innovative anti-aging solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-7 px-4 md:px-10 py-10">
        {
            treatments.map(treatment=> <Treatment
            key={treatment._id}
            treatment={treatment}
            ></Treatment>)
        }
      </div>


    </div>
  );
};

export default Treatments;
