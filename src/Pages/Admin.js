import React, { Fragment } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Bars } from "react-loader-spinner";
import { GetAccount } from "../Features/Account/Action";
import Card from "../Components/Dashboard/Card";
import { TailSpin } from "react-loader-spinner";
import { GetDeposits } from "../Features/Deposits/Action";
import { FetchWithdraws } from "../Features/Withdraw/Action";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { accountLoading, accountError, account } = useSelector(
    (state) => state.account
  );
  const { depositLoading, depositError, deposits } = useSelector(
    (state) => state.deposit
  );
  const { withdrawLoading, withdraws, withdrawError } = useSelector(
    (state) => state.withdraw
  );

  React.useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
    dispatch(GetDeposits({ axiosPrivate }));
    dispatch(FetchWithdraws({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  if (account.user && account.user.username !== "Tony Moshi")
    return <Navigate to="/" />;
  return (
    <div className="bg-green-100 w-screen min-h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">
          Welcome Back Tony Moshi!
        </h1>
      </div>
      <div className="lg:px-28 px-4 pt-2 flex flex-col items-center justify-center">
        <div className="w-full flex items-center gap-x-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full flex gap-4 my-4">
          <div className="w-1/2 shadow rounded-lg bg-white p-2">
            <h1 className="uppercase">Payments</h1>
            {depositLoading ? (
              <TailSpin height={60} width={60} color="green" />
            ) : depositError ? (
              <div>{depositError}</div>
            ) : (
              <div>
                {deposits.map((deposit) => (
                  <div
                    key={deposit._id}
                    className="bg-gray-200 rounded-lg w-11/12 p-2 my-3"
                  >
                    <h1>{deposit.user && deposit.user.username}</h1>
                    <h1 className="text-lg py-2 text-green-500 font-semibold">
                      {deposit.amount}
                    </h1>
                    <button
                      onClick={() => navigate(`/verify/${deposit._id}`)}
                      className="bg-blue-500 px-8 py-2 text-white rounded-xl"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-1/2 bg-white shadow rounded-lg ">
            <h1 className="uppercase text-lg my-2">Withdraw Requests</h1>
            {withdrawLoading ? (
              <Bars height={60} width={60} color="green" />
            ) : withdrawError ? (
              <div>{withdrawError.message}</div>
            ) : (
              withdraws && (
                <Fragment>
                  {withdraws.map((amount) => (
                    <div className="w-full bg-gray-100 rounded-lg p-2">
                      <span className="w-full flex items-center justify-between my-2">
                        <h1>Order id</h1>
                        <h1>{amount.order_id}</h1>
                      </span>
                      <h1>{amount.user && amount.user.username}</h1>
                      <span className="flex items-center justify-between">
                        <h1>Balance</h1>
                        <h1>{amount.balance}</h1>
                      </span>
                      <span className="flex items-center justify-between">
                        <h1>Requested amount</h1>
                        <h1>amount</h1>
                      </span>
                      <span>
                        <button
                          onClick={() => navigate(`/withdraw/${amount._id}`)}
                          className="px-32 py-2 text-xs text-white bg-blue-500 rounded-lg"
                        >
                          Vew withdraw
                        </button>
                      </span>
                    </div>
                  ))}
                </Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
