import React from "react";
import review from '../../../assets/review.png'
import review1 from '../../../assets/review1.png'
import review2 from '../../../assets/review2.png'
import Review from "./Review";

const Reviews = () => {

    const testimonials=[
        {
            name:'Sarah Johnson',
            age:42,
            img:review,
            message:"After just three months with Relive's  peptide therapy, I feel like I've turned back the clock by a decade. My energy  levels are through the roof! "
        },
        {
            name:'Michael Thomas',
            age:48,
            img:review,
            message:"The hormone replacement therapy at Relive has completely transformed my quality of life. I sleep better, think clearer."
        },
        {
            name:'Jennifer Lee',
            age:45,
            img:review2,
            message:"After just three months with Relive's  peptide therapy, I feel like I've turned back the clock by a decade. My energy  levels are through the roof! "
        }
    ]


  return (
    <div className="bg-[#09514D] px-4 md:px-12 py-5 md:py-16">
      <div className="text-center text-white  p-4 md:p-0 mx-auto mb-6">
        <h2 className="text-2xl md:text-4xl font-semibold  mt-4 md:mt-0">
          What Our <span className="text-primary ">Clients</span> Say
        </h2>
        <p className="mt-5 text-accent">
         Explore our wide range of innovative anti-aging solutions.
        </p>
      </div>


      <div>
        <div className="grid md:grid-cols-3 gap-7 px-4 md:px-10 py-10">
        {
            testimonials.map((testimonial,i)=> <Review
            key={i}
            testimonial={testimonial}
            ></Review>)
        }
      </div>
      </div>
    </div>
  );
};

export default Reviews;
