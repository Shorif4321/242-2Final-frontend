import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import MeetRelive from './MeetRelive/MeetRelive';
import Services from './Services/Services';
import Treatments from './Treatments/Treatments';
import Reviews from './Reviews/Reviews';
import Contact from '../../components/Contact/Contact';

const Home = () => {

      useEffect(() => {
            window.scrollTo(0, 0); // Scrolls instantly to the top
          }, []);
    

    return (
        <div>
            <Banner></Banner>
            <MeetRelive></MeetRelive>
            <Services></Services>
            <Treatments></Treatments>
            <Reviews></Reviews>
            <Contact title1="Get in" title2="Touch" des="We're here to help you start your wellness journey."></Contact>
        </div>
    );
};

export default Home;