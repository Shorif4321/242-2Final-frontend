import React from "react";
import location from '../../assets/icons/location.png'
import phone from '../../assets/icons/phone.png'
import email from '../../assets/icons/email.png'

const Contact = ({title1,title2,des}) => {
  return (
    <div className=" px-4 md:px-10 py-10 md:py-20 bg-[#F9FAFB]">
      <div className="text-center md:w-1/2 p-4 md:p-0 mx-auto mb-5">
        <h2 className="text-2xl md:text-4xl font-semibold  mt-4 md:mt-0">
          {title1} <span className="text-primary ">{title2}</span>
        </h2>
        <p>{des}</p>
      </div>

      <div className="md:flex justify-between pt-5 md:pt-10 gap-9">
        <div className="md:w-1/2 p-5 rounded-xl md:p-11 bg-white">
          <h3 className="text-xl font-bold mb-4 md:mb-8">Send Message</h3>
          <form action="">

            <input type="text" placeholder="Name" className="input w-full rounded-xl mb-4 border-1 border-neutral" />

            <input type="Email" placeholder="Email" className="input w-full rounded-xl mb-4 border-1 border-neutral" />
          
            <input type="Email" placeholder="Phone" className="input w-full rounded-xl mb-4 border-1 border-neutral" />

            <textarea type="text" placeholder="Type message here" className="textarea w-full rounded-xl mb-4 border-1 border-neutral" />

            <input type="submit" value="Send Now" className="mt-6 btn btn-primary rounded-4xl pt-4 pb-9  font-semibold capitalize w-full" />
          </form>
        </div>


        <div className="md:w-1/2 p-5 rounded-xl md:p-11 bg-white">
          <h3 className="text-xl font-bold mb-4 md:mb-8">Contact Information</h3>
          
          <div className="flex items-start">
            <img src={location} alt="" />
            <div className="ms-4">
              <h4 className="text-xl font-semibold mb-4">Our Location</h4>
              <p>123 Wellness Avenue, Suite 200Dubai, UAE</p>
            </div>
          </div>

          <div className="flex items-start mt-8">
            <img src={phone} alt="" />
            <div className="ms-4">
              <h4 className="text-xl font-semibold mb-4">Phone</h4>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start mt-8">
            <img src={email} alt="" />
            <div className="ms-4">
              <h4 className="text-xl font-semibold mb-4">Email</h4>
              <p>info@relive-clinic.com</p>
            </div>
          </div>

          <div className="flex items-start mt-8">
            <div className="ms-4">
              <h4 className="text-xl font-semibold mb-2">Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
