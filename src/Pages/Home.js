import React, { Fragment, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Reuben from ".././Assets/reuben.jpg";
import Card from "../Components/Home/Card";
import Logo from ".././Assets/Logo1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Bars } from "react-loader-spinner";
import { GetLevels } from "../Features/Level/Action";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { levelLoading, Levels, levelerror } = useSelector(
    (state) => state.level
  );
  const access = localStorage.getItem("access");
  useEffect(() => {
    dispatch(GetLevels());
  }, [dispatch]);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="relative w-screen h-[30rem]">
        <div className="absolute z-[200]">
          <Navbar />
        </div>
        <img
          src={Reuben}
          alt="reuben"
          className="w-screen h-[30rem] object-cover absolute"
        />
        <div className="absolute w-full h-[30rem] z-10 colors">
          <div className="w-full h-16 px-4 lg:px-28 flex items-center justify-between backdrop-blur-lg drop-shadow-lg">
            <div className="flex items-center gap-x-2">
              <img src={Logo} alt="logo" className="h-12" />
              <h1 className="text-2xl font-semibold text-green-800">Glovo</h1>
            </div>
            <div>
              {!access && (
                <button
                  onClick={() => navigate("/sign-in")}
                  className="px-4 py-2 bg-green-500 text-gray-50 rounded-lg"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          <div className="px-4 lg:px-28 pt-24">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold max-w-md py-2">
                Laborum aliquip eiusmod fugiat et nulla
              </h1>
              <hr className="w-36 h-2 bg-green-500" />
              <p className="py-3 max-w-lg text-xs">
                Labore non occaecat ea culpa. Nostrud do quis consequat aliquip
                ea mollit eiusmod laborum magna nisi anim aliquip. Ad laboris
                consectetur adipisicing dolore mollit in irure esse. Occaecat
                incididunt id duis dolor exercitation mollit minim amet eu id
                pariatur.
              </p>
              <button className="px-6 rounded-xl bg-white py-2 text-green-500 shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-28 pt-4 w-screen z-[100]  bg-green-100 overflow-x-hidden">
        <div>
          <h1 className="text-2xl font-bold text-green-500">
            Our Customer Levels
          </h1>
        </div>
        <div className="py-3 hidden lg:flex items-center justify-center gap-x-4 my-4">
          {levelLoading ? (
            <div className="w-full flex items-center justify-center">
              <Bars
                height="50"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : levelerror ? (
            <div className="w-full flex items-center justify-center">
              {levelerror}
            </div>
          ) : (
            Levels && (
              <Fragment>
                {Levels.map((item) => (
                  <Card item={item} />
                ))}
              </Fragment>
            )
          )}
        </div>
        <div className="py-3 flex flex-col lg:hidden  items-center justify-center gap-x-4 my-4">
          {levelLoading ? (
            <div className="w-full flex items-center justify-center">
              <Bars
                height="50"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : levelerror ? (
            <div className="w-full flex items-center justify-center">
              {levelerror}
            </div>
          ) : (
            Levels && (
              <Fragment>
                {Levels.map((item) => (
                  <Card item={item} />
                ))}
              </Fragment>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col mb-24">
        <div className="w-full flex items-center justify-center">
          <h1 className="py-2 text-2xl text-green-500 font-semibold">
            About us
          </h1>
        </div>
        <p className="text-sm px-4 lg:px-20 text-center">
          Glovo is a Spanish startup based in Barcelona in 2022. It is an
          on-demand messaging service that buys, picks up and delivers products
          ordered through its mobile app. It offers many services with food
          delivery being the most popular. The company was founded by Oscar
          Pierre and Sacha Michaud. Starting capital 20000tsh for VIP 1 4
          percent daily 800 The starting capital of vip 2 is 100000 tsh kwfa
          4.25 percent daily 4200 Vip3 capital 200000 at 4.5 percent every 9000
          days VIP 4 500000 for 5 percent daily 30000 The withdrawal rate is
          8000, the deduction is 8 percent Allow the money to reach the account
          in 1 hour If someone invites 5 PEOPLE, you will be given 20000 if you
          put money on your account, those people must be active Referral plan
          Level 1 10% Level 2 5% Level 3 2.5%
        </p>
      </div>
    </div>
  );
};

export default Home;
