import React from "react";

const Card = () => {
  return (
    <div className="w-full bg-white shadow p-2 rounded-xl">
      <div className="w-full flex flex-col items-center justify-center">
        <h1>Team Balance</h1>
        <h1 className="text-lg text-green-500 font-semibold ">$0</h1>
      </div>
    </div>
  );
};

export default Card;
