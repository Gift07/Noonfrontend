import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { BindInformation, GetAccount } from "../Features/Account/Action";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Bars } from "react-loader-spinner";

const Information = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { accountloading, accountError, account } = useSelector(
    (state) => state.account
  );
  const [formdata, setFormData] = useState({
    name: "",
    type: "",
    number: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(BindInformation({ axiosPrivate, formdata }));
    navigate("/profile");
  };

  useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">Share</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="bg-white shadow rounded-md w-11/12 lg:w-1/2 p-2">
          <div className="flex flex-col py-2">
            <label className="text-xs">Phone Number</label>
            <select
              value={formdata.type}
              name="type"
              onChange={(e) => handleChange(e)}
              className="bg-green-100 p-2 text-xs"
            >
              <option>Select withdraw account</option>
              <option value={"Wallet"}>Binance wallet</option>
              <option value={"Mobile"}>Mobile</option>
            </select>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-xs">Phone Number</label>
            <input
              value={formdata.number}
              name="number"
              onChange={(e) => handleChange(e)}
              className="bg-green-100 p-2 text-xs"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-xs">Real Name</label>
            <input
              value={formdata.name}
              name="name"
              onChange={(e) => handleChange(e)}
              className="bg-green-100 p-2 text-xs"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-xs">Real Name</label>
            <input
              value={account.user && account.user.username}
              className="bg-green-100 p-2 text-xs"
            />
          </div>
          <div className="w-full flex items-center justify-center py-3">
            {accountloading ? (
              <button
                onClick={handleSubmit}
                className="bg-yellow-500 rounded-md px-16 py-2"
              >
                <Bars height={10} width={10} color="white" />
              </button>
            ) : accountError ? (
              <span>{accountError}</span>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-yellow-500 rounded-md px-16 py-2"
              >
                Add Information
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
