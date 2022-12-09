import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SignupAction } from "../Features/Auth/Action";
import { Link, Navigate, useParams, useHistory } from "react-router-dom";
import { Bars } from "react-loader-spinner";

const Register = () => {
  const params = useParams();
  const history = useHistory();
  console.log(params.id);
  const [formdata, setFormData] = React.useState({
    extension_code: params.id,
    username: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });
  const { authLoading } = useSelector((state) => state.auth);
  const access = localStorage.getItem("access");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SignupAction({ formdata, history }));
  };
  if (access) return <Navigate to="/" />;
  return (
    <div className="w-screen bg-green-100 h-screen overflow-hidden font-popins flex items-center justify-center">
      <div className="w-11/12 lg:w-1/2 bg-white shadow-xl rounded-2xl p-4">
        <div>
          <h1 className="text-2xl font-semibold py-3">Glovo</h1>
        </div>
        <div>
          <h1>Lets get started</h1>
          <p>sign in to continue</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="py-2 flex flex-col">
            <label className="text-xs font-semibold py-2">Username</label>
            <input
              placeholder="username"
              value={formdata.username}
              name="username"
              onChange={(e) => handleChange(e)}
              className="px-4 py-2 text-xs w-full lg:w-8/12 rounded-md bg-green-100 h-10 text-grey-900 outline-none focus:border-2 focus:border-green-600"
            />
          </div>
          <div className="py-2 flex flex-col">
            <label className="text-xs font-semibold py-2">Phone number</label>
            <input
              placeholder="phonenumber"
              value={formdata.phonenumber}
              name="phonenumber"
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
          <div className="py-2 flex flex-col">
            <label className="text-xs font-semibold py-2">
              Confirm Password
            </label>
            <input
              type={"password"}
              placeholder="confirmPassword"
              name="confirmPassword"
              value={formdata.confirmPassword}
              onChange={(e) => handleChange(e)}
              className="px-4 py-2 text-xs w-full lg:w-8/12 rounded-md bg-green-100 h-10 text-grey-900 outline-none focus:border-2 focus:border-green-600"
            />
          </div>
          <div>
            <h1 className="text-xs flex items-center gap-x-2 font-semibold py-2">
              Already have an account? <Link to="sign-in">Login</Link>
            </h1>
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
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
