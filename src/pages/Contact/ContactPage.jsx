import React, { useEffect } from 'react';
import Contact from '../../components/Contact/Contact';

const ContactPage = () => {

       useEffect(() => {
        window.scrollTo(0, 0); // Scrolls instantly to the top
      }, []);


    return (
        <div>
            <Contact title1="Contact Our" title2="Team" des="We're here to help you start your wellness journey."></Contact>
        </div>
    );
};

export default ContactPage;