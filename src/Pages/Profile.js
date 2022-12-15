import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { IoCashOutline, IoNotificationsOutline } from "react-icons/io5";
import { BsCashStack } from "react-icons/bs";
import { FaAddressBook, FaShareAltSquare } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineSecurity, MdDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { GetAccount } from "../Features/Account/Action";
import { Bars } from "react-loader-spinner";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const access = localStorage.getItem("access");
  const { accountloading, accountError, account } = useSelector(
    (state) => state.account
  );

  useEffect(() => {
    dispatch(GetAccount({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[28rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
        {accountloading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Bars height={60} width={60} color="green" />
          </div>
        ) : accountError ? (
          <div>{accountError}</div>
        ) : (
          account && (
            <div className="absolute w-full">
              <div className="h-48  w-full px-4 lg:px-28 pt-8 flex items-center gap-x-6">
                <div>
                  <img
                    src={
                      "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    }
                    alt="expty"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-sm">
                    +{account.user && account.user.phonenumber}
                  </h1>
                  <div className="flex items-center  gap-x-6">
                    <h1 className="text-sm">Extension code:</h1>
                    <p className="uppercase text-sm">{account.user_code}</p>
                  </div>
                </div>
              </div>
              <div className="lg:px-28 flex flex-col lg:hidden items-center gap-x-6 w-full">
                <div className="w-11/12 lg:w-7/12">
                  <div className="bg-white shadow rounded-xl p-2 w-full">
                    <div>
                      <h1 className="uppercase">Balance</h1>
                    </div>
                    <div>
                      <h1 className="text-green-600 text-3xl font-semibold py-2">
                        ${account.balance}
                      </h1>
                      <div className="w-full flex items-center justify-between">
                        <button
                          onClick={() => navigate("/withdraw")}
                          className="bg-green-400 px-3 py-2 rounded-lg text-blue-600 text-xs"
                        >
                          Withdraw
                        </button>
                        <button
                          onClick={() => navigate("/recharge")}
                          className="bg-gray-300 px-3 py-2 rounded-lg text-xs  text-gray-600"
                        >
                          Recharge
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow rounded-xl p-2 w-full my-5">
                    <div className=" rounded-lg bg-gray-200 text-xs lg:text-md py-5 px-2 flex items-center justify-between">
                      <div
                        onClick={() => navigate("/account")}
                        className="flex flex-col items-center justify-between cursor-pointer"
                      >
                        <IoCashOutline size={28} color="green" />
                        <h1>Account flow</h1>
                      </div>
                      <div
                        onClick={() => navigate("/reports")}
                        className="flex flex-col items-center justify-between cursor-pointer"
                      >
                        <TbReportAnalytics size={28} color="green" />
                        <h1>Team reports</h1>
                      </div>
                      <div
                        onClick={() => navigate("/notification")}
                        className="flex flex-col items-center justify-between cursor-pointer"
                      >
                        <IoNotificationsOutline size={28} color="green" />
                        <h1>System notification</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 lg:w-5/12 mb-28">
                  <div className="bg-white shadow p-2 rounded-xl">
                    <h1 className="uppercase">Transactions</h1>
                    <ul>
                      <li className="py-3 border-b border-gray-300 text-sm">
                        <Link
                          className="flex items-center gap-x-2"
                          to="/address"
                        >
                          <FaAddressBook /> Receiving Address
                        </Link>
                      </li>
                      <li className="py-3 border-b border-gray-300 text-sm">
                        <Link className="flex items-center gap-x-2" to="/share">
                          <FaShareAltSquare />
                          Invite
                        </Link>
                      </li>
                      <li className="py-3 border-b border-gray-300 text-sm">
                        <Link
                          className="flex items-center gap-x-2"
                          to="/information"
                        >
                          <BsCashStack /> Bind Withdraw information
                        </Link>
                      </li>
                      <li className="py-3 border-b border-gray-300 text-sm flex items-center gap-x-2">
                        <Link
                          className="flex items-center gap-x-2"
                          to="/security"
                        >
                          <MdOutlineSecurity />
                          Account security
                        </Link>
                      </li>
                      {account.user &&
                        account.user.username === "Tony Moshi" && (
                          <li className="py-3 border-b border-gray-300 text-sm flex">
                            <Link
                              className="flex items-center gap-x-2"
                              to="/system-dashboard"
                            >
                              <MdDashboard />
                              Admin Page
                            </Link>
                          </li>
                        )}
                    </ul>
                    <button
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                      }}
                      className="px-5 py-2 text-sm text-white bg-red-600 rounded-md my-2"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:px-28 hidden  lg:flex gap-x-6 w-full">
                <div className="w-11/12 lg:w-7/12">
                  <div className="bg-white shadow rounded-xl p-2 w-full">
                    <div>
                      <h1 className="uppercase">Balance</h1>
                    </div>
                    <div>
                      <h1 className="text-green-600 text-3xl font-semibold py-2">
                        ${account.balance}
                      </h1>
                      <div
                        onClick={() => navigate("/withdraw")}
                        className="w-full flex items-center justify-between"
                      >
                        <button className="bg-green-400 px-3 py-2 rounded-lg text-blue-600 text-xs">
                          Withdraw
                        </button>
                        <button
                          onClick={() => navigate("/recharge")}
                          className="bg-gray-300 px-3 py-2 rounded-lg text-xs  text-gray-600"
                        >
                          Recharge
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow rounded-xl p-2 w-full my-5">
                    <div className=" rounded-lg bg-gray-200 text-xs lg:text-md py-5 px-2 flex items-center justify-between">
                      <div
                        onClick={() => navigate("/account")}
                        className="flex flex-col items-center justify-between cursor-pointer"
                      >
                        <IoCashOutline size={28} color="green" />
                        <h1>Account flow</h1>
                      </div>
                      <div
                        onClick={() => navigate("/reports")}
                        className="flex flex-col items-center justify-between cursor-pointer"
                      >
                        <TbReportAnalytics size={28} color="green" />
                        <h1>Team reports</h1>
                      </div>
                      <div
                        onClick={() => navigate("/notification")}
                        className="flex flex-col items-center justify-between cursor-pointer"
                      >
                        <IoNotificationsOutline size={28} color="green" />
                        <h1>System notification</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 lg:w-5/12 mb-28">
                  <div className="bg-white shadow p-2 rounded-xl">
                    <h1 className="uppercase">Transactions</h1>
                    <ul>
                      <li className="py-3 border-b border-gray-300 text-sm">
                        <Link
                          className="flex items-center gap-x-2"
                          to="/address"
                        >
                          <FaAddressBook /> Receiving Address
                        </Link>
                      </li>
                      <li className="py-3 border-b border-gray-300 text-sm">
                        <Link className="flex items-center gap-x-2" to="/share">
                          <FaShareAltSquare />
                          Invite
                        </Link>
                      </li>
                      <li className="py-3 border-b border-gray-300 text-sm">
                        <Link
                          className="flex items-center gap-x-2"
                          to="/information"
                        >
                          <BsCashStack /> Bind Withdraw information
                        </Link>
                      </li>
                      <li className="py-3 border-b border-gray-300 text-sm flex">
                        <Link
                          className="flex items-center gap-x-2"
                          to="/security"
                        >
                          <MdOutlineSecurity />
                          Account security
                        </Link>
                      </li>
                      {account.user &&
                        account.user.username === "Tony Moshi" && (
                          <li className="py-3 border-b border-gray-300 text-sm flex">
                            <Link
                              className="flex items-center gap-x-2"
                              to="/system-dashboard"
                            >
                              <MdDashboard />
                              Admin Page
                            </Link>
                          </li>
                        )}
                    </ul>
                    <button
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                      }}
                      className="px-5 py-2 text-sm text-white bg-red-600 rounded-md my-2"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Profile;
