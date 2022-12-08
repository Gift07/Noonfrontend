import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GetNotification } from "../Features/Notification/Action";
import { Bars } from "react-loader-spinner";

const Notification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { notificationLoading, notificationError, notification } = useSelector(
    (state) => state.notification
  );
  useEffect(() => {
    dispatch(GetNotification({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);
  return (
    <div className="bg-green-100 w-screen h-screen font-popins">
      <div className="py-4 px-4 lg:px-28 flex gap-x-2">
        <div
          onClick={() => navigate("/profile")}
          className="h-6 w-6 bg-green-500 text-white rounded-full flex items-center justify-center"
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-400 font-semibold">Notification</h1>
      </div>
      <div className="lg:px-28 px-4 flex items-center justify-center">
        {notificationLoading ? (
          <Bars height={40} width={40} color="green" />
        ) : notificationError ? (
          <span>{notificationError}</span>
        ) : (
          notification &&
          notification.map((not) => (
            <div
              key={not._id}
              className="w-11/12 lg:w-1/2 bg-white shadow rounded-lg p-3"
            >
              <div className="p-2 rounded-lg w-full my-2 bg-gray-100">
                <h1>{not.createdAt}</h1>
                <p>{not.name}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notification;
