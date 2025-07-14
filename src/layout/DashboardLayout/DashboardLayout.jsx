import React from "react";
import Header from "../../pages/Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open mt-19">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
                    : "text-gray-600 hover:text-teal-500"
                }
                to="/dashboard/my-service"
              >
                My Services
              </NavLink>
            </li>

            <li className="mt-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
                    : "text-gray-600 hover:text-teal-500"
                }
                to="/dashboard/all-users"
              >
                All Users
              </NavLink>
            </li>
            <li className="mt-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-500 font-semibold border-b-2 border-teal-500 pb-1"
                    : "text-gray-600 hover:text-teal-500"
                }
                to="/dashboard/add-service"
              >
               Add Service
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
