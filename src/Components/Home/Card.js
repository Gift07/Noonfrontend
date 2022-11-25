import React from "react";
import Lina from "../../Assets/lina.jpg";

const Card = ({ item }) => {
  return (
    <div className="bg-white h-64 my-2  lg:h-72 w-11/12 lg:w-64 shadow-xl rounded-xl relative font-popins">
      <img
        src={item.image_url}
        alt="lina"
        className="w-full h-64 lg:h-72 object-cover rounded-xl absolute"
      />
      <div className="absolute w-full top-0 font-semibold uppercase text-lg p-2">
        <h1>{item.name}</h1>
      </div>
      <div className="absolute w-full bottom-0">
        <div className="glass w-full h-16 z-10 rounded-b-xl p-2">
          <div className="w-full py-1 flex items-center justify-between text-white text-xs">
            <h1>Investment Required: ${item.amount_deposited}</h1>
            <h1>Orders: {item.orders}</h1>
          </div>
          <div className="w-full py-1 flex items-center justify-between text-white text-xs">
            <h1>Current Level: {item.name}</h1>
            <h1>Commision: {item.commision}%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
