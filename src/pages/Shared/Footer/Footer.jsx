import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral text-accent rounded-t-[50px]">
    <footer className="footer sm:footer-horizontal px-5 md:px-10 py-5 md:py-10 md:py-20">
      <nav>
          <img src={logo} alt="relive" />
          <p>Cutting-edge anti-aging<br /> solutions  designed for a healthier, more <br /> vibrant  you. </p>
      </nav>
      <nav>
        <h6 className="text-xl font-semibold text-white">Quick Links</h6>
        <a className="link link-hover hover:text-primary">About us</a>
        <a className="link link-hover hover:text-primary">Contact</a>
        <a className="link link-hover hover:text-primary">Jobs</a>
        <a className="link link-hover hover:text-primary">Press kit</a>
      </nav>
      <nav>
        <h6 className="text-xl font-semibold text-white">Our Service</h6>
        <a className="link link-hover hover:text-primary">F1 visa</a>
        <a className="link link-hover hover:text-primary">Emergency Visa</a>
        <a className="link link-hover hover:text-primary">Tourist Visa</a>
        <a className="link link-hover hover:text-primary">Others</a>
      </nav>
      <form>
        <h6 className="text-xl font-semibold text-white">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join mt-3">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item text-primary"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>

    <div className="divider divider-primary"> 
    </div>

    <div className="text-white text-center py-5">
         © 2025 Relive Anti-Aging Clinic. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
