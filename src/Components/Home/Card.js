import React from "react";

const Card = ({ item }) => {
  return (
    <div
      key={item._id}
      className="bg-white h-64 my-2  lg:h-72 w-11/12 lg:w-64 shadow-xl rounded-xl relative font-popins"
    >
      <img
        src={item.image_url}
        alt="lina"
        className="w-full h-64 lg:h-72 object-cover rounded-xl absolute"
      />
      <div className="absolute w-full top-0 font-semibold uppercase text-lg p-2">
        <h1>{item.name}</h1>
      </div>
      <div className="absolute w-full bottom-0">
        <div className="glass w-full h-20 z-10 rounded-b-xl p-2">
          <div className="w-full py-1 flex items-center justify-between text-white text-xs">
            <h1>Investment from: ${item.from}</h1>
            <h1>Investment to: ${item.to}</h1>
          </div>
          <div className="w-full py-1 flex items-center justify-between text-white text-xs">
            <h1>Current Level: {item.name}</h1>
            <h1>Commision: {item.commision} usd</h1>
          </div>
          <h1 className="text-white">Orders: {item.orders}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
