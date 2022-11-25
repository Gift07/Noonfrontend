import React from "react";
import Navbar from "../Components/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Account = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[28rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
      </div>
      <div className="px-28 w-full pt-5">
        <div>
          <AiOutlineArrowLeft />
        </div>
      </div>
    </div>
  );
};

export default Account;
