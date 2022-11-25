import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SigninAction } from "../Features/Auth/Action";
import { Navigate } from "react-router-dom";
import Logo1 from "../Assets/Logo1.png";
import { Bars } from "react-loader-spinner";

const Login = () => {
  const [formdata, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const { isAuthenticated, authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SigninAction(formdata));
  };
  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <div className="w-screen bg-green-100 h-screen overflow-hidden font-popins flex flex-col items-center justify-center">
      <div>
        <img src={Logo1} alt="logo" className="w-32 object-cover" />
      </div>
      <div className="w-11/12 lg:w-1/2 bg-white shadow-xl rounded-2xl p-4">
        <div className="w-full flex iteems-center justify-center">
          <h1 className="text-2xl font-semibold py-3">Glovo</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1>Lets get started</h1>
          <p>sign in to continue</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="py-2 flex flex-col">
            <label className="text-xs font-semibold py-2">Username</label>
            <input
              placeholder="username"
              name="username"
              value={formdata.username}
              onChange={(e) => handleChange(e)}
              className="px-4 py-2 text-xs w-full lg:w-8/12 rounded-md bg-green-100 h-10 text-grey-900 outline-none focus:border-2 focus:border-green-600"
            />
          </div>
          <div className="py-2 flex flex-col">
            <label className="text-xs font-semibold py-2">Password</label>
            <input
              type={"password"}
              placeholder="password"
              name="password"
              value={formdata.password}
              onChange={(e) => handleChange(e)}
              className="px-4 py-2 text-xs w-full lg:w-8/12 rounded-md bg-green-100 h-10 text-grey-900 outline-none focus:border-2 focus:border-green-600"
            />
          </div>
          <div>
            <h1 className="text-xs font-semibold py-2">Forgot password?</h1>
          </div>
          <div className="pb-4">
            {authLoading ? (
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
            ) : (
              <button
                type="submit"
                className="uppercase w-full lg:w-8/12 bg-green-700 rounded-md text-white py-3 text-xs"
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
