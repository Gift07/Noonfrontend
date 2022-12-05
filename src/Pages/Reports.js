import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Card from "../Components/Account/Card";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { useSelector, useDispatch } from "react-redux";
import { GetAccount } from "../Features/Account/Action";
import { Bars } from "react-loader-spinner";

const Reports = () => {
  const [actveLevel, setActveLevel] = React.useState(0);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { accountLoading, account, accountError } = useSelector(
    (state) => state.account
  );

  React.useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [axiosPrivate, dispatch]);
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
          <Card name={"Team balance"} value={0} />
          <Card name={"Level 1 member"} value={4} />
          <Card name={"Team total recharge"} value={10.1} />
          <Card name={"Registered members"} value={4} />
        </div>
        <div className="w-full bg-white shadow p-2 rounded-xl mb-28">
          <div className="flex gap-x-6 pt-4 uppercase">
            <h1
              onClick={() => setActveLevel(0)}
              className={`${
                actveLevel === 0 && "border-b-2 border-blue-500"
              } px-4 cursor-pointer`}
            >
              Member Lv 1
            </h1>
            <h1
              onClick={() => setActveLevel(1)}
              className={`${
                actveLevel === 1 && "border-b-2 border-blue-500"
              } px-4 cursor-pointer`}
            >
              Member Lvl 2
            </h1>
            <h1
              onClick={() => setActveLevel(2)}
              className={`${
                actveLevel === 2 && "border-b-2 border-blue-500"
              } px-4 cursor-pointer`}
            >
              Member Lv3
            </h1>
          </div>
          <hr />
          <div className="pt-2 w-full">
            {accountLoading ? (
              <Bars height={20} width={20} color="green" />
            ) : accountError ? (
              <div>{accountError.message}</div>
            ) : (
              account && (
                <Fragment>
                  {actveLevel === 0 ? (
                    <div>
                      {account.children1.length === 0 ? (
                        <div />
                      ) : (
                        account.children1.map((x) => (
                          <div className="w-full flex flex-col">
                            <div className="w-full flex items-center justify-between py-2">
                              <h1>James Carter</h1>
                              <h1>$0</h1>
                            </div>
                            <hr />
                          </div>
                        ))
                      )}
                    </div>
                  ) : actveLevel === 1 ? (
                    <div>
                      {account.children2.length === 0 ? (
                        <div />
                      ) : (
                        account.children2.map((x) => (
                          <div className="w-full flex flex-col">
                            <div className="w-full flex items-center justify-between py-2">
                              <h1>James Carter</h1>
                              <h1>$0</h1>
                            </div>
                            <hr />
                          </div>
                        ))
                      )}
                    </div>
                  ) : (
                    actveLevel === 2 && (
                      <div>
                        {account.children3.length === 0 ? (
                          <div />
                        ) : (
                          account.children3.map((x) => (
                            <div className="w-full flex flex-col">
                              <div className="w-full flex items-center justify-between py-2">
                                <h1>James Carter</h1>
                                <h1>$0</h1>
                              </div>
                              <hr />
                            </div>
                          ))
                        )}
                      </div>
                    )
                  )}
                </Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
