import React from "react";
import Card from "../Components/Grab/Card";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Grab = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[28rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
        <div className="absolute w-full">
          <div className="px-28 py-3">
            <h1 className="text-green-500 font-semibold text-2xl py-3">
              Grab an order
            </h1>
            <button
              onClick={() => navigate("/grab-order")}
              className="px-24 py-2 text-xs bg-blue-800 rounded-lg text-white"
            >
              Start grabing orders
            </button>
            <div className="shadow bg-white p-2 my-3 rounded-lg py-5">
              <div>
                <h1 className="uppercase">Accounts Fund</h1>
                <h1 className="text-blue-800 text-2xl font-semibold py-2">
                  $10.65775
                </h1>
              </div>
            </div>
            <div className="shadow bg-white p-2 my-4 rounded-xl grid grid-cols-2 gap-3">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grab;
