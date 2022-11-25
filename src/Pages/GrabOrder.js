import React from "react";
import Kelly from "../Assets/kelly.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const GrabOrder = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="px-28">
        <div className="h-8 w-8 flex items-center justify-center my-4 bg-green-400 rounded-full">
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-500 font-semibold">Grab Order</h1>
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <div className="w-8/12 py-2 shadow rounded-lg bg-white pl-2">
          <div>
            <h1 className="uppercase py-1">kjlajd90393093</h1>
          </div>
          <div className="flex gap-x-4">
            <img src={Kelly} alt="kelly" className="h-20 w-20 object-cover" />
            <div className="text-xs">
              <h1>[Malaysia] Pen Murah Gel Pen 0</h1>
              <h1 className="text-xl text-green-500 font-semibold">$10.0111</h1>
              <h1>Commision: $0.6748</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-48 py-2 bg-green-500 text-blue-600 rounded-lg">
          Grab Order
        </button>
      </div>
    </div>
  );
};

export default GrabOrder;
