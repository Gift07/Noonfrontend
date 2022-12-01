import React from "react";
import Navbar from "../Components/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Card from "../Components/Account/Card";

const Reports = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[28rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
      </div>
      <div className="absolute w-full px-4 lg:px-28 pt-5">
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          <AiOutlineArrowLeft />
        </div>
        <div>
          <h1 className="text-green-500 text-xl font-semibold">Team Reports</h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 py-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full bg-white shadow p-2 rounded-xl">
          <div className="flex gap-x-6 pt-4 uppercase">
            <h1 className="border-b-2 border-blue-500 px-4 cursor-pointer">
              Member Lv 1
            </h1>
            <h1>Member Lvl 2</h1>
            <h1>Member Lv3</h1>
          </div>
          <hr />
          <div className="pt-2 w-full">
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center justify-between py-2">
                <h1>James Carter</h1>
                <h1>$0</h1>
              </div>
              <hr />
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center justify-between py-2">
                <h1>James Carter</h1>
                <h1>$0</h1>
              </div>
              <hr />
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center justify-between py-2">
                <h1>James Carter</h1>
                <h1>$0</h1>
              </div>
              <hr />
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center justify-between py-2">
                <h1>James Carter</h1>
                <h1>$0</h1>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
