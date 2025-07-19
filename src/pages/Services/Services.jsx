import React, { useEffect, useState } from 'react';
import ServicesBanner from './ServicesBanner/ServicesBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Services = () => {
      useEffect(() => {
            window.scrollTo(0, 0); 
          }, []);
    

      const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            {/* <ServicesBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></ServicesBanner> */}
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
        </div>
    );
};

export default Services;