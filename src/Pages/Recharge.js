import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import Image from "../Assets/Image.jpeg";
import React, { useState, useEffect } from "react";
import {
  GetAccount,
  RechargeAccount,
  SetPendingFunds,
} from "../Features/Account/Action";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { SendNotificaton } from "../Features/Notification/Action";

const Recharge = () => {
  const access = localStorage.getItem("access");
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [files, setFiles] = useState(null);
  const [amount, setAmount] = useState(0.0);
  const [transaction, setTransaction] = useState("");
  const [close, setClose] = useState(false);
  const [error, setError] = useState("");
  const rechargeAmounts = [
    10, 15, 20, 25, 30, 35, 40, 45, 60, 65, 70, 75, 80, 85,
  ];
  const { account } = useSelector((state) => state.account);
  useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  const handleSubmit = () => {
    let formdata = new FormData();

    formdata.append("amount", amount);
    formdata.append("transaction", transaction);
    formdata.append("Image", files);
    const item = {
      value: "Request Sent",
      user: account.user._id,
    };
    dispatch(SendNotificaton({ axiosPrivate, item }));
    dispatch(RechargeAccount({ axiosPrivate, formdata }));
    dispatch(SetPendingFunds({ axiosPrivate }));
    navigate("/profile");
  };

  if (!access) return <Navigate to="/" />;
  return (
    <div className="relative">
      <div className="absolute bg-green-100 w-screen h-screen font-popins">
        <div className="py-4 px-4 lg:px-28 flex gap-x-2">
          <div
            onClick={() => navigate("/profile")}
            className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
          >
            <AiOutlineArrowLeft />
          </div>
          <h1 className="text-xl text-green-400 font-semibold">Recharge</h1>
        </div>
        <div className="px-4 lg:px-28 pt-5">
          <div className="flex items-center gap-x-3">
            <label className="uppercase text-xs">amount</label>
            <input
              value={amount}
              readOnly
              className="w-full py-2 text-xs rounded-lg bg-green-300 px-3 text-blue-700"
            />
          </div>
          {error && <h1 className="text-center text-red-500">{error}</h1>}
          <div className="bg-white shadow w-full rounded-xl flex items-center justify-center my-3">
            <div className="grid grid-cols-2 gap-4 w-full p-3">
              {rechargeAmounts.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAmount(item)}
                  className="bg-gray-200 w-full h-10 flex items-center justify-center"
                >
                  <h1>{item}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <button className="w-full py-3 text-xs bg-blue-700 rounded-xl text-white my-2">
              UsdtPay(trc)
            </button>
            <button
              onClick={() => {
                if (amount === 0) {
                  setError("amount can not be zero");
                } else {
                  setClose(!close);
                }
              }}
              className="w-full py-3 text-xs bg-blue-700 rounded-xl text-white"
            >
              M-PESA or Tigo-PESA
            </button>
          </div>
        </div>
      </div>
      {close && (
        <div className="absolute z-20 w-screen h-screen backdrop-blur">
          <div className="w-full px-4 lg:px-28 pt-4 flex justify-end">
            <div
              onClick={() => setClose(!close)}
              className="bg-white p-3 rounded-full"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="w-full flex items-center justify-center px-4 lg:px-28 pt-4">
            <div className="w-full bg-white rounded-xl">
              <div className="w-full px-4">
                <div className="flex items-center justify-between">
                  <h1>Order</h1>
                  <h1>21e3r3r2rrtg35</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1>Amount</h1>
                  <h1>{amount} usd</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1>Amount</h1>
                  <h1>{Math.ceil(amount * 2332)} Tzs</h1>
                </div>
              </div>
              <div className="w-full flex items-center justify-center pt-3">
                <img
                  src={Image}
                  alt="pay"
                  className="w-11/12 lg:w-7/12 h-96 object-contain"
                />
              </div>
              <div className="w-full px-4 pt-2">
                <div className="flex flex-col">
                  <label>Upload the image</label>
                  <input
                    type={"file"}
                    name="file"
                    className=""
                    onChange={(e) => setFiles(e.target.files[0])}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h1>Transaction serial Number</h1>
                  <input
                    placeholder="Enter Number"
                    value={transaction}
                    onChange={(e) => setTransaction(e.target.value)}
                    className="p-2 w-24 lg:w-96 text-black placeholder:text-black outline-none h-6 lg:h-10 bg-green-500 rounded-lg py-3"
                  />
                </div>
                <div className="w-full flex items-center justify-center my-2 text-white">
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-blue-500 rounded-xl"
                  >
                    I have finished payments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recharge;
