import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyService = () => {

    
    const [myServices,setMyServices]= useState([])
        const {user} = useContext(AuthContext)
        useEffect(()=>{
            fetch(`http://localhost:3000/bookings?email=${user?.email}`)
            .then(res=>res.json())
            .then(data=>setMyServices(data))
        },[])

   
    
    return (
       <div>
      <h1>My Bookings {myServices.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
              <th>Applicant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                myServices.map((booking,i) => <tr key={i}>
              <th>{i + 1}</th>
              <td>{booking.appointmentDate}</td>
              <td>{booking.slot}</td>
              <td>{booking.service}</td>
              <td>{booking.applicant}</td>
              <td>
                <button className="btn btn-sm btn-outline btn-error">Cancel</button>
              </td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyService;