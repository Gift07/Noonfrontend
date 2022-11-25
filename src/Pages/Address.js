import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { GetAccount } from "../Features/Account/Action";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Address = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { accountLoading, accountError, account } = useSelector(
    (state) => state.account
  );
  useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch]);
  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">Address</h1>
      </div>
      <div className="w-11/12 lg:w-1/2 shadow bg-white rounded-xl p-2">
        <div className="flex flex-col py-2">
          <label className="text-xs">Phone Number</label>
          <input
            value={account.user.phonenumber}
            className="bg-green-100 p-2 text-xs"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-xs">Real Name</label>
          <input
            value={account.user.username}
            className="bg-green-100 p-2 text-xs"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-xs">Real Name</label>
          <input
            value={account.user.username}
            className="bg-green-100 p-2 text-xs"
          />
        </div>
        <div className="w-full flex items-center justify-center py-3">
          <button className="bg-yellow-500 rounded-md px-16 py-2">Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Address;
