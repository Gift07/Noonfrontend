import React from "react";

const Card = ({ title, number }) => {
  return (
    <div className="w-full bg-gray-200 rounded-xl py-9 px-3 my-2">
      <div>
        <h1>{title}</h1>
        <h1 className="text-lg font-semibold">{number}</h1>
      </div>
    </div>
  );
};

export default Card;
