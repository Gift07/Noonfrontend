import React from "react";
import Card from "../Components/Grab/Card";
import Navbar from "../Components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { GetAccount } from "../Features/Account/Action";

const Grab = () => {
  const navigate = useNavigate();
  const access = localStorage.getItem("access");
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const { accountLoading, account, accountError } = useSelector(
    (state) => state.account
  );
  React.useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);
  if (!access) return <Navigate to="/" />;
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[28rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
        <div className="absolute w-full">
          <div className="px-4 lg:px-28 py-3">
            <h1 className="text-green-500 font-semibold text-2xl py-3">
              Grab an order
            </h1>
            {account && account.payment === "Init" ? (
              <div>
                <h1>Please Deposit Funds to start grabbing orders</h1>
              </div>
            ) : account.payment === "Payment" ? (
              <div>
                <h1>Glovo admins will activate your payments shortly</h1>
              </div>
            ) : (
              <button
                onClick={() => navigate("/grab-order")}
                className="px-24 py-2 text-xs bg-blue-800 rounded-lg text-white"
              >
                Start grabing orders
              </button>
            )}
            <div className="shadow bg-white p-2 my-3 rounded-lg py-5">
              <div>
                <h1 className="uppercase">Accounts Fund</h1>
                <h1 className="text-blue-800 text-2xl font-semibold py-2">
                  ${account.balance}
                </h1>
              </div>
            </div>
            <div className="shadow bg-white p-2 my-4 mb-24 lg:mb-24 rounded-xl flex flex-col lg:grid lg:grid-cols-2 lg:gap-3">
              <Card title={"Todays commission"} number={"$0"} />
              <Card title={"Total commision"} number={"$0"} />
              <Card title={"Completed Orders Today"} number={"0"} />
              <Card title={"Orders not completed Today"} number={"0"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grab;
