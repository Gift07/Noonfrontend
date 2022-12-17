import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Bars } from "react-loader-spinner";
import { ApproveWithdraw, GetAccount } from "../Features/Account/Action";
import { SendNotificaton } from "../Features/Notification/Action";
import { DeleteWithdraw, FetchWithdraw } from "../Features/Withdraw/Action";

const WithdrawId = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { withdrawLoading, withdraw, withdrawError } = useSelector(
    (state) => state.withdraw
  );

  React.useEffect(() => {
    dispatch(FetchWithdraw({ axiosPrivate, id }));
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch, axiosPrivate, id]);

  const handleSubmit = () => {
    const body = {
      user: withdraw.user._id,
      amount: withdraw.amount,
    };
    const item = {
      value: "Withdraw Accepted",
      user: withdraw.user._id,
    };
    dispatch(SendNotificaton({ axiosPrivate, item }));
    dispatch(ApproveWithdraw({ axiosPrivate, body }));
    dispatch(DeleteWithdraw({ axiosPrivate, id: withdraw._id }));
    navigate("/system-dashboard");
  };
  const handleReject = () => {
    const item = {
      value: "Withdraw Rejected",
      user: withdraw.user._id,
    };
    dispatch(SendNotificaton({ axiosPrivate, item }));
    dispatch(DeleteWithdraw({ axiosPrivate, id: withdraw._id }));
    navigate("/system-dashboard");
  };
  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/system-dashboard")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">
          Verify Withdraw
        </h1>
      </div>
      <div className="w-full">
        {withdrawLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Bars height={60} width={60} color="green" />
          </div>
        ) : withdrawError ? (
          <div>{withdrawError}</div>
        ) : (
          withdraw && (
            <div className="lg:px-28 px-4">
              <div className="w-full flex items-center justify-between px-4 my-2">
                <h1>Order code</h1>
                <h1>{withdraw.order_id}</h1>
              </div>
              <div className="w-full flex items-center justify-between px-4 my-2">
                <h1>Withdraw amount</h1>
                <h1>{withdraw.amount}</h1>
              </div>
              <div className="w-full flex items-center justify-between px-4 my-2">
                <h1>withdraw wallet</h1>
                <h1>
                  {withdraw.account_type ? withdraw.account_type : "None"}
                </h1>
              </div>
              <div className="w-full flex items-center justify-between px-4 my-2">
                <h1>withdraw account</h1>
                <h1>
                  {withdraw.account_info ? withdraw.account_info : "None"}
                </h1>
              </div>
              <div className="w-full flex items-center justify-between px-4 my-2">
                <h1>withdraw name</h1>
                <h1>
                  {withdraw.account_name ? withdraw.account_name : "None"}
                </h1>
              </div>
              <div className="w-full flex items-center justify-between px-4">
                <h1>Name</h1>
                <h1>{withdraw?.user && withdraw.user.username}</h1>
              </div>
              <div className="w-full flex items-center justify-between my-2">
                <button
                  onClick={handleSubmit}
                  className="px-6 text-xs py-2 text-white bg-blue-500 rounded-xl active:blue-600"
                >
                  Approve withdraw
                </button>
                <button
                  onClick={handleReject}
                  className="px-6 py-2 text-white bg-red-500 rounded-xl text-xs active:bg-red-600"
                >
                  Reject withdraw
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WithdrawId;
