import React from "react";
import Logo from "../../Assets/Logo.jpeg";

const OrdersComponent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img src={Logo} alt="logo" className="h-48 w-48 object-cover my-4" />
      <div>
        <button className="px-12 py-2 text-xs text-blue-900 bg-green-600 rounded-xl my-3">
          Start grabing orders
        </button>
      </div>
    </div>
  );
};

export default OrdersComponent;
