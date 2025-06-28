import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [color, setColor] = useState(false);
  //change color on scroll

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
              : "text-gray-600 hover:text-teal-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
              : "text-gray-600 hover:text-teal-500"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
              : "text-gray-600 hover:text-teal-500"
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
              : "text-gray-600 hover:text-teal-500"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      {
        user?.uid ? <li>
        <a  onClick={logOut}
          className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
              : "text-gray-600 hover:text-teal-500"
          }
         
        >
         Log Out
        </a>
      </li> : <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
              : "text-gray-600 hover:text-teal-500"
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
      }
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10  navbar p-3 md:px-10 shadow-sm ${
        color ? "nav-basic on-scroll" : "nav-basic"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="bg-primary btn btn-ghost lg:hidden me-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="relive" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="border-2 border-primary w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user?.uid
                    ? user.photoURL
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          {
            user?.uid && <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                {user?.displayName}
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>{user?.email}</a>
            </li>
            {user?.uid ?  <li>
                <a onClick={logOut}>Logout</a>
              </li>: 
             <li>
                <Link to="/login">Login</Link>
              </li>
            }
          </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
