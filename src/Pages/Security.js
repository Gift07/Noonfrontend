import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ChangePassword } from "../Features/Auth/Action";
import { Bars } from "react-loader-spinner";

const Security = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authLoading, message, authError } = useSelector(
    (state) => state.auth
  );
  const axiosPrivate = useAxiosPrivate();
  const [formdata, setFormdata] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleClck = () => {
    dispatch(ChangePassword({ axiosPrivate, formdata }));
  };
  if (message !== "") return <Navigate to="/profile" />;
  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">Security</h1>
      </div>
      <div className="w-full flex lg:px-28 px-4">
        <div className="bg-white shadow rounded-md w-11/12 lg:w-1/2 p-2">
          <span>
            <h1 className="uppercase text-lg py-2">Change password</h1>
          </span>
          <div>
            <div className="py-2">
              <label>Old password</label>
              <input
                name="oldPassword"
                value={formdata.oldPassword}
                onChange={(e) => handleChange(e)}
                placeholder="Old password"
                className="w-11/12 p-2 h-10 rounded-lg bg-green-100 outline-none focus:border focus:border-green-500"
              />
            </div>
            <div className="py-2">
              <label>New password</label>
              <input
                name="newPassword"
                value={formdata.newPassword}
                onChange={(e) => handleChange(e)}
                placeholder="New password"
                className="w-11/12 p-2 h-10 rounded-lg bg-green-100  outline-none focus:border focus:border-green-500"
              />
            </div>
            <div className="py-2">
              <label>Confirm password</label>
              <input
                name="confirmPassword"
                value={formdata.confirmPassword}
                onChange={(e) => handleChange(e)}
                placeholder="Confirm password"
                className="w-11/12 p-2 h-10 rounded-lg bg-green-100 "
              />
            </div>

            <div>
              {authLoading ? (
                <Bars height={30} width={30} color="dodgerBlue" />
              ) : authError ? (
                <div>{authError}</div>
              ) : (
                <button
                  onClick={handleClck}
                  className="px-12 py-2 text-white bg-blue-500 rounded-lg text-xs active:bg-blue-600"
                >
                  Change Password
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Security;
