import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GetAccount } from "../Features/Account/Action";
import { Bars } from "react-loader-spinner";
import { CreateWithdraw } from "../Features/Withdraw/Action";

const Withdraw = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const axiosPrivate = useAxiosPrivate();
  const { accountLoading, account, accountError } = useSelector(
    (state) => state.account
  );
  useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  const handleSubmit = () => {
    const body = {
      amount,
      balance: account.balance,
      account_name: account.withdraw_account.account_name,
      account_type: account.withdraw_account.account_type,
      account_info: account.withdraw_account.account_info,
    };
    console.log(body);
    dispatch(CreateWithdraw({ axiosPrivate, body }));
    navigate("/profile");
  };

  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">Withdrawal</h1>
      </div>
      <div className="lg:px-28 px-4 flex items-center justify-center">
        <div className="w-11/12 lg:w-1/2 bg-white shadow rounded-lg p-3">
          {accountLoading ? (
            <Bars height={60} width={60} color="green" />
          ) : accountError ? (
            <div>{accountError}</div>
          ) : (
            <div>
              <h1 className="uppercase">Balance</h1>
              <h1 className="uppercase font-semibold text-green-500">
                {account.balance}
              </h1>
              <div className="w-full flex items-center justify-between my-2">
                <h1>withdraw method</h1>
                <h1>Mobile</h1>
              </div>
              <div className="w-full flex items-center justify-between my-2">
                <h1>withdraw fee</h1>
                <h1>8%</h1>
              </div>
              <div>
                <label>Enter Amount</label>
                <input
                  placeholder="Enter amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-11/12 lg:w-7/12 p-2 text-xs bg-gray-100 rounded-lg outline-none focus:border focus:border-green-400"
                />
              </div>
              <div className="my-3">
                <button
                  onClick={handleSubmit}
                  className="px-28 py-2 text-xs bg-green-500 rounded-lg text-blue-800"
                >
                  Withdraw
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
