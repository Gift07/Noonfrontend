import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { DeleteDeposit, GetDeposit } from "../Features/Deposits/Action";
import { Bars } from "react-loader-spinner";
import { SetSuccessfull } from "../Features/Account/Action";
import { SendNotificaton } from "../Features/Notification/Action";
import { CreateOrder } from "../Features/Orders/Action";

const Verify = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { depositLoading, depositError, deposit } = useSelector(
    (state) => state.deposit
  );

  React.useEffect(() => {
    dispatch(GetDeposit({ axiosPrivate, id }));
  }, [dispatch, axiosPrivate, id]);

  const handleSubmit = () => {
    const body = {
      _id: deposit.user._id,
      amount: deposit.amount,
      commision: deposit.commision,
    };
    const item = {
      value: "Accept Payment",
      user: deposit.user._id,
    };
    dispatch(SendNotificaton({ axiosPrivate, item }));
    dispatch(SetSuccessfull({ axiosPrivate, body }));
    dispatch(DeleteDeposit({ axiosPrivate, id: deposit._id }));
    dispatch(CreateOrder({ axiosPrivate, _id: deposit.user._id }));
    navigate("/system-dashboard");
  };
  const handleReject = () => {
    const item = {
      value: "Reject Payment",
      user: deposit.user._id,
    };
    dispatch(SendNotificaton({ axiosPrivate, item }));
    dispatch(DeleteDeposit({ axiosPrivate, id: deposit._id }));
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
        <h1 className="text-xl text-green-400 font-semibold">Verify</h1>
      </div>
      <div className="w-full">
        {depositLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Bars height={60} width={60} color="green" />
          </div>
        ) : depositError ? (
          <div>{depositError}</div>
        ) : (
          deposit && (
            <div className="lg:px-28 px-4">
              <img
                src={deposit.receipt_image}
                alt="receipt"
                className="w-full rounded-xl h-64 object-cover"
              />
              <div className="w-full flex items-center justify-between px-4 my-2">
                <h1>Transaction code</h1>
                <h1>{deposit.transaction_id}</h1>
              </div>
              <div className="w-full flex items-center justify-between px-4 my-2">
                <h1>Transaction code</h1>
                <h1>{deposit.amount}</h1>
              </div>
              <div className="w-full flex items-center justify-between px-4">
                <h1>Name</h1>
                <h1>{deposit?.user && deposit.user.username}</h1>
              </div>
              <div className="w-full flex items-center justify-between my-2">
                <button
                  onClick={handleSubmit}
                  className="px-12 py-2 text-white bg-blue-500 rounded-xl active:blue-600"
                >
                  Approve Payment
                </button>
                <button
                  onClick={handleReject}
                  className="px-12 py-2 text-white bg-red-500 rounded-xl active:bg-red-600"
                >
                  Reject Payment
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Verify;
