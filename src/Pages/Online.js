import React from "react";
import Navbar from "../Components/Navbar";
import { BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Online = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[28rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="w-11/12 lg:w-1/2 bg-white shadow p-2">
            <h1 className="text-center text-green-500 font-semibold py-3 text-xl">
              Our Contacts
            </h1>
            <div className="w-full">
              <div className="flex items-center gap-x-2">
                <BsTelegram size={22} />
                <h1>Telegram</h1>
              </div>
              <div className="flex items-center gap-x-2 py-2">
                <AiOutlineWhatsApp size={22} />
                <h1>whatsapp</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;
