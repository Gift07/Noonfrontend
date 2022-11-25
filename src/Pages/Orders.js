import React from "react";
import Navbar from "../Components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[28rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
      </div>
      <div className="w-full absolute">
        <div className="px-28 pt-6">
          <h1 className="text-green-500 font-semibold text-xl">Orders</h1>
        </div>
        <div className="px-28 pt-4 flex items-center gap-x-4">
          <NavLink
            to="/orders/grab-one"
            className={({ isActive }) =>
              `${isActive && "border-b-2 border-blue-600"} px-4`
            }
          >
            <h1>Orders</h1>
          </NavLink>
          <NavLink
            to="/orders/done"
            className={({ isActive }) =>
              `${isActive && "border-b-2 border-blue-600"} px-4`
            }
          >
            <h1>done</h1>
          </NavLink>
        </div>
        <hr />
        <div className="px-28 pt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Orders;
