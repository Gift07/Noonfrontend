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
              <button
                onClick={() => navigate("/sign-in")}
                className="px-4 py-2 bg-green-500 text-gray-50 rounded-lg"
              >
                Login
              </button>
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
            <Fragment>
              {Levels.map((item) => (
                <Card item={item} />
              ))}
            </Fragment>
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
            <Fragment>
              {Levels.map((item) => (
                <Card item={item} />
              ))}
            </Fragment>
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
          Noon is the second largest e-commerce platform in the Middle East. It
          is built by the main investor Emaar Real Estate and the Saudi
          sovereign fund with a joint investment of US$1 billion. Emaar is one
          of the largest real estate developers in the Middle East. Its
          properties include the world's tallest building, the Burj Khalifa, and
          the world's largest shopping mall, Dubai Mall. Its founder, Mohamed
          Alabbar, was the chief advisor to the King of Dubai and Sheikh
          Mohammed bin Rashid Al Maktoum, Vice President and Prime Minister of
          the United Arab Emirates. Platform advantages: 1. Localized operation,
          full-category shopping experience, and obvious advantages in overseas
          warehouses; 2. The Internet penetration rate is 60%, of which the UAE
          penetration rate exceeds 909%, and the development potential is huge.
          The title, price, details and other information content of the
          goods/services displayed by noon cross-border (including websites,
          clients, etc.) are provided by the actual service provider. If the
          user has any questions about the title, price, details and other
          information of the goods/services, he can directly communicate with
          the online customer service for confirmation; for other questions,
          please consult the noon economic consultant.
        </p>
      </div>
    </div>
  );
};

export default Home;
