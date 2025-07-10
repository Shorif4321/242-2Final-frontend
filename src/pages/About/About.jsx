import React, { useEffect } from "react";
import MeetRelive from "../Home/MeetRelive/MeetRelive";
import Treatments from "../Home/Treatments/Treatments";
import Reviews from "../Home/Reviews/Reviews";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Treatments></Treatments>
      <MeetRelive></MeetRelive>
      <Reviews></Reviews>
    </div>
  );
};

export default About;
