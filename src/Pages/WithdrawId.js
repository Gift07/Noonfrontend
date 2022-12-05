import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { AiOutlineArrowLeft } from "react-icons/ai";

const WithdrawId = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">Notification</h1>
      </div>
      hello
    </div>
  );
};

export default WithdrawId;
