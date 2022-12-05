import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { BsHeadset, BsPerson } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 lg:w-4/12 h-20 bg-white rounded-3xl justify-between px-8 shadow-lg fixed bottom-3 right-[7.5%] lg:right-[30%] p-2 flex">
      <div className="flex flex-col text-green-600 items-center justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-green-600" : "text-gray-800"
            } flex flex-col items-center justify-center `
          }
        >
          <IoHomeOutline size={20} />
          <h1 className="text-xs uppercase font-bold">Home</h1>
        </NavLink>
      </div>
      <div className="flex flex-col text-green-600 items-center justify-center">
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${
              isActive ? "text-green-600" : "text-gray-800"
            } flex flex-col items-center justify-center `
          }
        >
          <TbReport size={20} />
          <h1 className="text-xs uppercase font-bold">Orders</h1>
        </NavLink>
      </div>
      <button
        onClick={() => navigate("/grab")}
        className="p-4 bg-green-600 rounded-full text-white text-xs align-middle"
      >
        <h1>+</h1>
        <h1>Grab</h1>
      </button>
      <div className="flex flex-col text-green-600 items-center justify-center">
        <NavLink
          to="/online"
          className={({ isActive }) =>
            `${
              isActive ? "text-green-600" : "text-gray-800"
            } flex flex-col items-center justify-center `
          }
        >
          <BsHeadset size={20} />
          <h1 className="text-xs uppercase font-bold">Online</h1>
        </NavLink>
      </div>
      <div className="flex flex-col text-green-600 items-center justify-center">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${
              isActive ? "text-green-600" : "text-gray-800"
            } flex flex-col items-center justify-center `
          }
        >
          <BsPerson size={20} />
          <h1 className="text-xs uppercase font-bold">Profile</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
