import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { GetProduct } from "../Features/Orders/Action";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { GetAccount } from "../Features/Account/Action";

const GrabOrder = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { orderLoading, order, orderError } = useSelector(
    (state) => state.order
  );
  const { account } = useSelector((state) => state.account);
  React.useEffect(() => {
    dispatch(GetProduct({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);
  const handleClick = () => {
    dispatch(GetProduct({ axiosPrivate }));
    dispatch(GetAccount({ axiosPrivate }));
    dispatch(GrabOrder({ axiosPrivate, commision: account.commision }));
  };
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-green-100 font-popins flex flex-col">
      <div className="px-4 lg:px-28">
        <div className="h-8 w-8 flex items-center justify-center my-4 bg-green-400 rounded-full">
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-xl text-green-500 font-semibold">Grab Order</h1>
      </div>
      <div className="w-full flex items-center justify-center py-4">
        {orderLoading ? (
          <TailSpin height="60" width="60" />
        ) : orderError ? (
          <div>{orderError}</div>
        ) : (
          <div className="w-11/12 lg:w-8/12 py-2 shadow rounded-lg bg-white pl-2">
            <div>
              <h1 className="uppercase py-1">{order.product_id}</h1>
            </div>
            <div className="flex gap-x-4">
              <img
                src={order.image_url}
                alt="kelly"
                className="h-20 w-20 object-cover"
              />
              <div className="text-xs">
                <h1>{order.name}</h1>
                <h1 className="text-xl text-green-500 font-semibold">
                  ${order.price}
                </h1>
                <h1>Commision: $0.6748</h1>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleClick}
          className="w-48 py-2 bg-green-500 text-blue-600 rounded-lg"
        >
          Grab Order
        </button>
      </div>
    </div>
  );
};

export default GrabOrder;
